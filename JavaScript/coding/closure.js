// 示例一
function add() {
    let n = 1;
    return function() {
        n++;
        console.log(n);
    }
}
const adder = add();
adder();
adder();

// 示例二
// 两者输出差异的原因，let存在块级作用域，var不存在
for(let i = 0; i < 10; i++) { // 输出 0 - 9
    setTimeout(()=>{
        console.log(i);
    }, 1000);
}
for(var i = 0; i < 10; i++) { // 输出 10 个 10
    setTimeout(()=>{
        console.log(i);
    }, 1000);
}