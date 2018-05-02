# node_process_problem
node多进程问题探讨

####1, worker.js - master.js 模拟了分布式的demo,当然只是最简单的；
####2，node提供了四种创建进程的方式,分别是spawn()，exec()，execFile(), fork()，四者的区别如下；
<pre> 
    var cp = require('child_process);
    cp.spawn('node', ['worker.js']);
    cp.exec('node worker.js', function(err,stdout,stderr){}); 
    cp.execFile('worker.js', function(err,stdout,stderr){});
    cp.fork('worker.js');
</pre>
注 ： （1）其中exec,execFile可设置超时时间，其他不可以；
     （2）execFile执行可执行文件的时候，如果是js文件，则首航内容必须添加 #!/usr/bin/env node

