/**
 * Created by zhengcaiyun on 2018/3/9.
 */
//创建10个子进程, 存放在children中；
var children = [];
for(var i=0; i<10; i++){
    var child = require('child_process').fork('child.js');
    children.push(child);
}
// 创建server监听来自客户端的服务
var server = require('net').createServer();
server.on('connection', function(socket){
    socket.end('handle by parent dddddddd\n');
});
server.listen(1337, function(){
    // var random = parseInt(Math.random() * 10);
    // console.log('children' + random + 'receive information');
    for(var i=0; i<10; i++){
        children[i].send('server'+i, server);
        //children[i].send('connection', server);
    }
    server.close();
});