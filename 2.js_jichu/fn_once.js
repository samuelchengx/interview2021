/**
 * 一次执行函数
 * @param fn
 * @returns {function(): any}
 */
function once(fn){
    let flag = true
    return function () {
        if(flag){
            fn()
            flag = false
        }
        return undefined
    }
}
