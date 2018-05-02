/**
 * Created by zhengcaiyun on 2018/3/9.
 */
process.on('message', function(m) {
    console.log('child received infomation from parent : ' ,m);
    process.send({foo: 'foo'});
});
console.log('process >> ', process.pid);
