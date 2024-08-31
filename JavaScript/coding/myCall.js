Function.prototype.myCall = function (context, ...args) {
    context = context || global;

    context.__fn__ = this;
    const result = context.__fn__(...args);
    delete context.__fn__;
    return result;
}

const dog = {
    name: '旺财',
    eat: function (food1, food2) {
        console.log(`${this.name}喜欢吃${food1}` + food2);
    }
}

const cat = {
    name: '喵喵',
}
global.name = '老虎';

dog.eat.call(cat, '鱼', '肉');
dog.eat.myCall(cat, '鱼', '肉');

dog.eat.call(null, '各种', '肉');
dog.eat.myCall(null, '各种', '肉');