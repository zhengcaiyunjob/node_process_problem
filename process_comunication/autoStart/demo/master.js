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
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('create worker.pid : ', worker.pid);

  // 在退出一个进程的时候, 创建一个进程;
  worker.on('exit', function(){
    console.log('worker' + worker.pid + ' exit.');
    delete workers[worker.pid];
    createWorker();
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
})