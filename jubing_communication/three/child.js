/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var server = require('http').createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('handled by child, pid is ' + process.pid + '\n');
});
process.on('message', function(m, tcp) {
    tcp.on('connection', function(socket){
        server.emit('connection', socket);
    });
});