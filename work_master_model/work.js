/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('hello world\n')
});
server.listen({
    host: '127.0.0.1',
    port: Math.round((1 + Math.random())* 1000),
}, function(res){
    console.log('server start !')
});

server.on('error', function(e){
    console.log('error', e);
});