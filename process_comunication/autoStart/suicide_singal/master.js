/**
 * Created by zhengcaiyun on 2018/5/2.
 */
var fork = require('child_process').fork;
var cpus = require('os').cpus();
var server = require('net').createServer();
server.listen(1337);

var workers = {};
var createWorker = function(){
  var worker = fork('./worker.js');

  // 发送句柄给子进程, 并将所有的进程纳入到 wrokers 中统一管理;
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('create worker.pid : ', worker.pid);

  // 监听一个子进程发送的自杀的信号, 如果收到子进程自杀的信号, 则自动新建一个新的进程, 随后
  worker.on('message', function(message){
    if(message.act === 'suicide') {
      createWorker();
    }
  });

  // 在子进程退出的时候, 删除子进程的 pid;
  worker.on('exit', function(){
    console.log('worker' + worker.pid + ' exit.');
    delete workers[worker.pid];
  });
};

// 根据 cpu 内核数量创建进程
for(var i = 0; i < cpus.length; i++) {
  createWorker();
}

// 进程退出时候, 自动杀死
process.on('exit', function(){
  for(var pid in workers) {
    workers[pid].kill();
  }
});