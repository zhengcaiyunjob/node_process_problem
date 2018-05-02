/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var event = require('./event');
var server = require('http').createServer(function(req, res){
    console.log('server.port >>> ', server);
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('handled by child, pid is ddd ' + process.pid + '\n');
});
process.on('message', function(m, tcp) {
    tcp.on('connection', function(socket){
        server.emit('connection', socket);
        // event.emit('finish', {'finish': true});
    });
});

event.on('finish', function(m){
    console.error('event finish process', m);

});