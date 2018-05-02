/**
 * Created by zhengcaiyun on 2018/4/25.
 */
process.stdin.setEncoding('utf8');
process.on('message', function(m, server){
  if(m === 'server'){
    server.on('connection', function(socket){
      socket.end('handle by child1');
    })
  }
});