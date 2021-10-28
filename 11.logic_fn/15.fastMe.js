/**
 * 快速幂
 * 视频地址: https://www.bilibili.com/video/BV1xp4y1Q77V?from=search&seid=17410941095271419834
 */

// 方法1, 循环的版本
function myPow1(num, power) {
    if(power < 0) return 1/ (num*myPow(num, -(power + 1)))
    if(power === 0) return 1
    if(power === 1) return num
    let res = 1
    while (power>1) {
        if(power % 2 === 1) {
            power--
            res = res * num
        }
        // power为偶数
        num = num * num
        power = power/2
    }
    return res * num
}
// 方法2,递归版本
function myPow2(num, power) {
    if(power < 0) return 1/ (num*myPow(num, -(power + 1)))
    if(power === 0) return 1
    if(power === 1) return num
    let res = 1
    if(power % 2 === 1) {
        return num * myPow2(num, power-1)
    }else {
        return myPow2(num*num, power/2)
    }
}
console.log(myPow2(2, 10))
