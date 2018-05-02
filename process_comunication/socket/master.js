/**
 * Created by zhengcaiyun on 2018/5/1.
 */
var axon = require('axon');
var socket = axon.socket('push');

socket.bind(3000);
console.log('push server started');
var data = Array(1024 * 1024).fill(0).join('');
socket.on('message', function(type, size, img){

});

setInterval(function(){
  var i = 10;
  while(i--) {
    socket.send({
      data: data,
      time: Date.now()
    });
    //console.log('i >> ', i);
    //socket.send('hello');
  }
}, 1000);