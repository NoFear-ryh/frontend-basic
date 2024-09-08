Function.prototype.myBind = function (context, ...outArgs) {
    const _self = this;

    return function fn(...innerArgs) {
        context = context || global;
        const args = outArgs.concat(innerArgs);
        if(Object.getPrototypeOf(this) === fn.prototype) {
            return new _self(...args);
        }
        return _self.apply(context, args);
    }
}

const dog = {
    name: '旺财',
    eat: function (food1, food2) {
        console.log(`${this.name}喜欢吃${food1}` + food2);
    }
}
const cat = {
    name: '喵喵'
}
global.name = '老虎';

const fuc = dog.eat.bind(cat, '鱼', '肉');
const myFuc = dog.eat.myBind(cat, '鱼', '肉');
fuc();
myFuc();

const fuc1 = dog.eat.bind(null, '鱼', '肉');
const myFuc1 = dog.eat.myBind(null, '鱼', '肉');
new fuc1();
new myFuc1();