/**
 * Created by zhengcaiyun on 2018/5/2.
 */
var fork = require('child_process').fork;
var cpus = require('os').cpus();
var server = require('net').createServer();
server.listen(1337);

// 时间计算
var limit = 10;
var during = 6000;
var restart = [];

// 判断重启的频率是否过高;
var isTooFrequently = function(){
  // 记录重启时间
  var time = Date.now();
  var length = restart.push(time);
  if(length > limit) {
    restart = restart.slice(limit * -1);
  }
  // 最后一次重启到前10次重启之间的时间间隔;
  return restart.length >= limit && restart[restart.length - 1] - restart[0] < during;

};

var workers = {};
var createWorker = function(){
  // 检查是否太过于频繁
  if(isTooFrequently()) {
    console.log(' operation frenquency');
    process.emit('giveup', 2, during);
    return;
  }

  var worker = fork('./worker.js');
  worker.on('exit', function(){
    console.log('worker: ' + worker.pid + ' exit');
    delete workers[worker.pid];
  });

  worker.on('message', function(message){
    if(message.act === 'suicide') {
      createWorker();
    }
  });

  //句柄转发
  worker.send('server', server);
  workers[worker.pid] = worker;
  console.log('create worker.pid ' + worker.pid);
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
