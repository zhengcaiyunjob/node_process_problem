/**
 * Created by zhengcaiyun on 2018/3/9.
 */
process.on('message', function(m, server){
    if(m === 'server') {
        server.on('connection', function(socket){
            socket.end('handled by child\n');
        });
    }
});