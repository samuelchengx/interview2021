/**
 * 两个有序数组的中位数
 * @param arr
 */
function twoArrayMiddleSiteNumber(a1, a2) {
    let num  =[...a1, ...a2]
    num = num.sort(function (a, b) {
        return a-b
    })
    let m = parseInt((num.length)/2)
    let l = num.length
    if(l%2 === 0) {
        return (num[m] + num[m-1]) /2
    } else {
        return num[m]
    }
}
let arr1 = [1,3], arr2 = [2]
console.log(twoArrayMiddleSiteNumber(arr1, arr2))
