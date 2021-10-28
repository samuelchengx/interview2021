/**
 * 斐波那契数列
 */
function fibonacci1(n, ac1=1,ac2=1){
    if(n<=1){return ac2}
    return fibonacci(n-1, ac2, ac1 + ac2)
}

function fibonacci(n) {
    // 递归调用会占用大量的系统堆栈，内存耗用多，
    // 在递归调用层次多时速度要比循环慢的多，
    // 所以在使用递归时要慎重。
    // 在要求高性能的情况下尽量避免使用递归，
    // 递归调用既花时间又耗内存。
    // 1、递归方式实现
    // if(n===1 || n===2){
    // return 1
    // }
    // return fibonacci(n-1) + fibonacci(n-2)
    // 2、迭代方式实现
    // 3、实现缓存机制 memoize
    // 4、方向查找数列实现
    let cache = {}
    if(n <= 2) return 1
    if(cache[`${n}`]) return cache[`${n}`]
    let f1 = 1, f2 = 1, temp = 0
    for(let i = 2; i < n; i++) {
        temp = f1
        f1 = f2
        f2 = temp + f1
    }
    cache[`${n}`] = f2
    return f2
}
console.log(fibonacci(10))
console.log(fibonacci(10))
