/**
 * Created by zhengcaiyun on 2018/3/9.
 */
var parent = require('child_process');
var p = parent.fork(__dirname + '/sub.js');
p.on('message', function(m) {
    console.log(' parent receive infomation from sub : ' + m);
});
p.send({hello: 'world'});
for(var i=0; i< 10; i++){
    p.send({hello: 'world' + i});
}