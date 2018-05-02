/**
 * Created by zhengcaiyun on 2018/3/19.
 */
var a = '123@##@456@#xxx#@789';
var b = /@#\w*#@/g;
var c = a.replace(b, '****');
console.log('c', c);
console.log('ddd >>',b.test(a));
