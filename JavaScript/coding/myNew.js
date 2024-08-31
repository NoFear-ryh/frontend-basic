/**
 * new 操作符实现
 * 1、创建一个空对象
 * 2、将构造函数的原型指向这个新对象
 * 3、将构造函数的 this 指向新对象，并执行构造函数
 * 4、如果构造函数执行结果为引用类型，则返回该结果，否则返回新创建的对象
 */
function myNew(fn, ...args) {
    if(typeof fn !== 'function') {
        throw Error('type error');
    }
    const newObj = Object.create(fn.prototype);
    const result = fn.apply(newObj, args);
    return result instanceof Object ? result : newObj;
}

function Person1(name, age) {
    this.name = name;
    this.age = age;
}

const p1 = myNew(Person1, 'WXR', 11);
const p2 = new Person1('WXR', 11);
console.log('p1', p1);
console.log('p2', p1);

function Person2(name, age) {
    this.name = name;
    this.age = age;
    return {gender: 'male', phone: '1982342'}
}

const p3 = myNew(Person2, 'WXRR', 22);
const p4 = new Person2('WXRR', 22);
console.log('p3', p3);
console.log('p4', p4);