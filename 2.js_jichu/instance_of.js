/**
 * 实现原生的instanceof方法
 */
function instance_of(L, R) {
    let O = R.prototype
    L = L.__proto__
    while (true) {
        if(L === null){
            break
            return false
        }
        if(L === O){
           break
           return true
        }
        L = L.__proto__
    }
}



