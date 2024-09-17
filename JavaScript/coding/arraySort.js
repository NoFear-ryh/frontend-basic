const nums = [11, 5, 23, 21, 16, 8, 14, 24, 56, 32, 44, 24, 23, 2, 1];

// 冒泡排序：每次将数组中剩余的数中最大（或最小）的那个数放到数组末尾
function BubbleSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
console.log(BubbleSort(nums));

// 选择排序：每次找到数组中最大（小）的那个数，将它放到已排序数组的末尾
function SelectSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len - 1; i++) {
        let index = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[j] < arr[index]) {
                index = j;
            }
        }
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return arr;
}
console.log(SelectSort(nums));

// 插入排序：
// 插入排序：将待排序序列的第一个元素看为有序序列，把第二个元素到最后一个元素当成未排序序列
// 依次扫描未排序序列，将扫描到的每个元素插入到有序序列的合适位置，使序列依然有序
function InsertSort(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        let curIndex = i;
        while(curIndex - 1 >= 0 && arr[curIndex - 1] > arr[i]) {
            arr[curIndex] = arr[curIndex - 1];
            curIndex--;
        }
        arr[curIndex] = arr[i];
    }
    return arr;
}
console.log(InsertSort(nums));

// 快速排序：
// 从数组中挑出一个元素作为基准（povit），将所有比基准小的数放左边，比基准大的数放右边
// 递归基准左边的序列和右边的序列，重复上述操作，直到数组变成有序
function QuickSort(arr) {
    quick(0, arr.length - 1);
    return arr;

    function quick(left, right) {
        let l = left;
        let r = right;
        const pviot = arr[l];

        while(l < r) {
            while(l < r && arr[r] >= pviot) {
                r--;
            }
            arr[l] = arr[r];
            while(l < r && arr[l] < pviot){
                l++;
            }
            arr[r] = arr[l];
        }
        arr[l] = pviot;
        if(l + 1 < right) { quick(l + 1, right); }
        if(l - 1 > left) { quick(left, l - 1); }
    }
}
console.log(QuickSort(nums));