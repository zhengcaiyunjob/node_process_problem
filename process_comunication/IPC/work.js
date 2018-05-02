/**
 * Created by zhengcaiyun on 2018/5/1.
 */
var i = 0;

process.on('message', function(params){
  var now = Date.now();
const data = params.data;
const time = params.time;
console.log(i++, now - Number(time));
// console.log('data', data);
});