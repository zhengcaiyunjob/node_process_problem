/**
 * Created by zhengcaiyun on 2018/5/1.
 */
var axon = require('axon');
var socket = axon.socket('pull');

socket.connect(3000);

var i = 0;
socket.on('message', function(msg){
  var now = Date.now();
  var data = msg.data;
  var time = msg.time;
  console.log(i++, now-Number(time));
  //console.log(msg);
});