/**
 * Created by zhengcaiyun on 2018/3/26.
 */
var Event = function(){
    this.handles={};
}
Event.prototype.on = function (eventName, callback) {
    if(!this.handles[eventName]){
        this.handles[eventName]=[];
    }
    this.handles[eventName].push(callback);
};
Event.prototype.emit = function (eventName) {
    //你的代码
    if(this.handles[arguments[0]]){
        for(var i=0;i<this.handles[arguments[0]].length;i++){
            this.handles[arguments[0]][i](arguments[1]);
        }
    }
};

var a = new Event();
module.exports = a;