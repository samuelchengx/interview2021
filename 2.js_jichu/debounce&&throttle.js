/**
 * 在一段时间只执行一次
 */
function debounce(fn, delay) {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(this, args)
        }, delay)
    }
}
/**
 * 某个时间间隔执行一次
 */
function throttle(fn, delay = 500) {
    let flag = true
    return function (...args) {
        if(!flag) return
        flag = false
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay)
    }
}
