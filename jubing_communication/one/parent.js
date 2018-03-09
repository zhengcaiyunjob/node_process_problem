/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var child = require('child_process').fork('children.js');
var server = require('net').createServer();
server.on('connection', function(socket){
    socket.end('handle by parent\n');
});
server.listen(1337, function(){
    child.send('server', server);
});