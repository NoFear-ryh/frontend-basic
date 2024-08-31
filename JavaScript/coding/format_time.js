
function getFormatTime() {
    const time = new Date();
    const toTwoBit = (n) => String(n).padStart(2, '0');
    const day = ['天', '一','二', '三', '四', '五', '六'];

    const y = time.getFullYear();
    const m = toTwoBit(time.getMonth() + 1);
    const d = toTwoBit(time.getDate());

    const h = toTwoBit(time.getHours());
    const mm = toTwoBit(time.getMinutes());
    const s = toTwoBit(time.getSeconds());

    const w = time.getDay();


    return `${y}-${m}-${d} ${h}-${mm}-${s} 星期${day[w]}`;
}

console.log(getFormatTime());
