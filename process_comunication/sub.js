/**
 * Created by zhengcaiyun on 2018/3/9.
 */
process.on('message', function(m) {
    console.log('child received infomation from parent : ' ,m);
});
console.log('process >> ', process.pid);
//process.send({foo: 'foo'});