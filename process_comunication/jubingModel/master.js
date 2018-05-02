/**
 * Created by zhengcaiyun on 2018/4/25.
 */
var child = require('child_process');
process.stdin.setEncoding('utf8');
var workers = ['./worker1.js', './worker2.js', './worker3.js'];
var server = require('net').createServer();
server.on('connection', function(socket){
  socket.end('handle by parent\n');
});
server.listen(8011, function(){
  for(var i=0; i<workers.length; i++) {
    var kid = child.fork(workers[i]);
    kid.send('server', server)
  };
  server.close();
});