/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var fork = require('child_process').fork;
var cpus = require('os').cpus();
console.log('cpus >>>', cpus.length);
for(var i=0 ; i<cpus.length; i++) {
    var work = fork('./worker.js');
};