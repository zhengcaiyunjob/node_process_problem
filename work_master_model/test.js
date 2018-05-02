/**
 * Created by zhengcaiyun on 2018/4/24.
 */
var exec = require('child_process').exec;
var curlStr = "curl 'http://127.0.0.1:1815'";
var start_time = new Date().getTime();
for(var i= 0; i<1000; i++) {
  exec(curlStr, function(err,stdout,stderr){
    if(err) {
      console.log('get weather api error:'+stderr);
    } else {
      //var data = JSON.parse(stdout);
      console.log(stdout);
    }
  });
}
var end_time = new Date().getTime();
console.log('duration', end_time-start_time);
