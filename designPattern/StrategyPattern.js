/**
 * 策略模式：策略模式中可定义一系列算法， 并将每种算法分别放入独立的类中， 以使算法的对象能够相互替换
 */

// 策略接口
class MathOperationStrategy {
    calculate(a, b) {}
}


// 具体策略：加法
class Add extends MathOperationStrategy {
    calculate(a, b) {
        return a + b;
    }
}
// 具体策略：减法
class Sub extends MathOperationStrategy {
    calculate(a, b) {
        return a - b;
    }
}
// 具体策略：乘法
class Mul extends MathOperationStrategy {
    calculate(a, b) {
        return a * b;
    }
}
// 具体策略：除法
class Div extends MathOperationStrategy {
    calculate(a, b) {
        if(a === 0 && b === 0) { throw Error('type error!'); }
        else if(b === 0) { return a > 0 ? Infinity : -Infinity; }
        else { return a / b; }
    }
}


// 实现 Calculator 类，切换不同算法 和 调用不同算法
class Calculator {
    constructor(operation) {
        this.operation = operation;
    }
    setOperation(newOperation) {
        this.operation = newOperation;
    }
    excuteOperation(num1, num2) {
        return this.operation.calculate(num1, num2);
    }
}


// 调用 Calculator 类，并在不同算法之间切换
const cal = new Calculator(new Add());
console.log(cal.excuteOperation(11, 22));

cal.setOperation(new Sub());
console.log(cal.excuteOperation(11, 22));

cal.setOperation(new Mul());
console.log(cal.excuteOperation(11, 22));

cal.setOperation(new Div());
console.log(cal.excuteOperation(11, 22));
