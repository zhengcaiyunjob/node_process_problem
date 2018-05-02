/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('hello world\n');
});
const port = Math.round((1 + Math.random())* 1000);
server.listen({
    host: '127.0.0.1',
    port: port,
}, function(){
    console.log('server start !', port);
});

server.on('error', function(e){
    console.log('error', e);
});