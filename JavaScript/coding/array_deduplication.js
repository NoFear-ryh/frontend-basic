// 数组去重
const arr = [1, 2, 3, 1, 2, 2, 1, 3, 4, 5, 8, 6, 7, 5, 4, 3, 8, 6, 7, 9];

// 方法一
const newArr1 = [... new Set(arr)];
console.log(newArr1);

// 方法二
const newArr2 = arr.filter((val, index, array) => array.indexOf(val) === index);
console.log(newArr2);

// 方法三
function getArr(array) {
    const len = array.length;
    const res = [];
    for(let i = 0; i < len; i++) {
        if(array.indexOf(array[i]) === i) { res.push(array[i]); }
    }
    return res;
}
console.log(getArr(arr));