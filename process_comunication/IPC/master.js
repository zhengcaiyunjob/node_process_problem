/**
 * Created by zhengcaiyun on 2018/5/1.
 */
const child_process = require('child_process');

var child = child_process.fork('./worker.js');
var data = Array(1024 * 1024).fill('0').join('');

setInterval(function() {
  var i = 100;
while(i--) child.send({data: data, time: Date.now()});
}, 1000);