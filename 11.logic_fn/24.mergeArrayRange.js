/***
 * 乱序区间合并
 * @type {number[][]}
 */
let a = [[1,4],[3,8], [10,15], [11,18], [20,27], [14,15],[19,28], [33, 35], [35, 36]]
function merge(intervals) {
    if(Array.isArray(intervals) && !intervals.length) return []
    intervals.sort((a, b) => a[0] - b[0])
    let result = [intervals[0]]
    for(let i = 1; i < intervals.length; i++) {
        let resultLast = result.length - 1
        if(result[resultLast][1] >= intervals[i][0]){
            result[resultLast][1] = Math.max(result[resultLast][1], intervals[i][1])
        } else {
            result.push(intervals[i])
        }
    }
    return result
}
console.log(merge(a))

