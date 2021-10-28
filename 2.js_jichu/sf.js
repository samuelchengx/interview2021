/**
 * 快排
 * @type {number[]}
 */
let arr = [8, 12, 6, 17, 1]
function quick(arr) {
    if(arr.length<2){
        return arr
    }
    let index = Math.floor(arr.length/2)
    let mid = arr.splice(index, 1)
    let left = [], right = []
    arr.forEach(el => {
        if(el > mid) {
            right.push(el)
        } else {
            left.push(el)
        }
    })
    return quick(left).concat(mid, quick(right))
}
/**
 * 求无序数组中第K大的值
 */
function bigKNum(arr, k) {
    arr = quick(arr)
    let len = arr.length
    if(k > len) {
        return new Error('k不合法')
    }
    return arr[len-1-(k-1)]
}
console.log(bigKNum(arr, 1))

/**
 * 插入排序
 */

/**
 * 冒泡排序
 */
