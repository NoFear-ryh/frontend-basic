/**
 * 工厂模式：在父类中提供一个创建对象的方法， 允许子类决定实例化对象的类型
 */

class User {
    constructor(role, pages) {
        this.role = role;
        this.pages = pages;
    }
    static userFactory(role) { // 定义静态方法，通过 User.userFactory() 即可访问
        switch(role) {
            case "superAdmin":
                return new User("superAdmin", ["home", "user-manage", "right-manege", "news-manage"]);
            case "admin":
                return new User("admin", ["home", "user-manage"]);
            case "editor":
                return new User("editor", ["home", "news-manege"]);
            default:
                throw new Error("type error!");
        }
    }
}