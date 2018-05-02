/**
 * Created by zhengcaiyun on 2018/5/2.
 */

var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
function roundRobin(arr) {
  var i = 0;
  var mod = 0;
  var len = arr.length;
  while( i != len ) {
    mod = (i + 1) % len;
    if(mod > 0) {
      console.log('choose', i,  arr[mod-1]);
    } else {
      console.log('choose', i,  arr[i]);
    }
    i++;
  }
}
roundRobin(arr);

