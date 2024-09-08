/**
 * 单例模式：一种创建型设计模式，能够保证一个类只有一个实例，并且提供一个访问该实例的全局节点
 * 分为两类：懒汉式 和 饿汉式
 */

// 饿汉式：类一旦加载，就把单例初始化完成，保证 getInstance 的时候，单例是已经存在的
class SingletonHungry {
    constructor(name, age) {
        if(!SingletonHungry.instance) {
            this.name = name;
            this.age = age;
            SingletonHungry.instance = this;
        }
    }
    getInstance () {
        return SingletonHungry.instance;
    }
}
const s1 = new SingletonHungry('WXR', 22);
const s2 = new SingletonHungry('WWW', 44);
console.log(s1.getInstance());
console.log(s2.getInstance());


// 懒汉式：只有当调用 getInstance 的时候，才初始化这个实例
class SingletonLazy {
    getInstance (name, age) {
        if(!SingletonLazy.instance) {
            this.name = name;
            this.age = age;
            SingletonLazy.instance = this;
        }
        return SingletonLazy.instance;
    }
}
const s3 = new SingletonLazy();
const s4 = new SingletonLazy();
console.log(s3.getInstance('xiaoming', 33));
console.log(s4.getInstance('xiaogang', 44));