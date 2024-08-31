// debounce 防抖
function debounce(fallback, t) {
    let timer = null;

    return function () {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fallback();
            timer = null;
        }, t);
    }
}

// throttle 节流
function throttle(fallback, t) {
    let timer = null;

    return function() {
        if(!timer) {
            timer = setTimeout(() => {
                fallback();
                timer = null;
            }, t);
        }
    }
} 