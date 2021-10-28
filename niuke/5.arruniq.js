/**
 * 方法1
 * @returns {any[]}
 */
// Array.prototype.uniq = function () {
//     return Array.from(new Set(this))
//     // return [...new Set(this)]
// }

function arrayUniq(arr) {
    return Array.from(new Set(arr))
}

/**
 *  方法2
 * @returns {[]}
 */
Array.prototype.uniq = function () {
    let args = this
    let len = args.length
    let result = []
    let flag = true
    for(let i = 0; i < len; i++) {
        if(args.indexOf(args[i]) != -1) { // 先把item为NaN情况排除
            if(i === args.indexOf(args[i])) {
                result.push(args[i])
            }
        } else if(flag) {
            result.push(args[i])
            flag = false
        }
    }
    return result
}


let arr = [true, false, 1,2,3, {}, {}, 1, null, undefined, 'a', NaN]
// let arr1 = arr.uniq()
// console.log(arr1)

function arrayUniq2(arr) {
    let result = []
    // 考虑到不是纯数字的情况 item为NaN，则arr.index(NaN) === -1
    let flag = true
    for(let i = 0; i < arr.length; i++) {
        if(arr.indexOf(arr[i]) != -1) { // item为NaN的情况
            if(i === arr.indexOf(arr[i])) {
                result.push(arr[i])
            }
        } else if(flag) {
            result.push(arr[i])
            flag = false
        }
    }
    return result
}

console.log('uniq', arrayUniq2(arr))

/**
 * 如果数组为纯数字 可以使用数组indexOf 和 splice去重
 */

function arrayUniq3(arr) {

}

