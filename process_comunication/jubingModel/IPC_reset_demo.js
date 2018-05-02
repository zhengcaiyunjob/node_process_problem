/**
 * Created by zhengcaiyun on 2018/4/27.
 */
function(message, handle, emit){
  var self = this;
  var server = new net.Server(); // 根据Type字段生成一个新的server, 该server保留相同的socket文件描述符
  server.listen(handle, function(){ //handle 处理函数
    emit(server);
  })
}