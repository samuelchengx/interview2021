/**
 * 1、暴力方法
 * @param arr
 * @param sum
 * @returns {[]}
 */
function twoSum(arr, sum){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        // if(arr[i] > sum) continue
        let index = arr.indexOf(sum - arr[i])
        if(index !== -1 && index !== i) {
            result = [i, index]
            break
        }
    }
    return result
}
console.log(twoSum([11,15, 2, 8, 7], 9))
