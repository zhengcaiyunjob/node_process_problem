/**
 * Created by zhengcaiyun on 2018/4/25.
 */
var server = require('net').createServer();
process.stdin.setEncoding('utf8');
server.on('connection', function(socket){
  socket.end('handle by worker1\n');
});

server.listen(8012);