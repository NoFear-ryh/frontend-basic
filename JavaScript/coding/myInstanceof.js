// 判断构造函数 right 的 prototype 属性是否出现在实例对象 left 的原型链上
function myInstanceof(left, right) {
    if(typeof right !== 'function') {
        throw Error('type error');
    }
    if(!left || (typeof left !== 'object' && typeof left !== 'function')) {
        return false;
    }
    let proto = left.__proto__;
    while(proto) {
        if(proto === right.prototype) { return true; }
        proto = proto.__proto__;
    }
    return false;
}
console.log(myInstanceof([], Array));
console.log(myInstanceof(function(){}, Function));
console.log(myInstanceof({}, Object));
