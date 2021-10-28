/**
 * 数组扁平化
 */
// 方法1
function fateArray1(arr) {
    let res = []
    arr.forEach(v => {
        if(Array.isArray(v)){
            res.push(...fateArray1(v))
        } else {
            res.push(v)
        }
    })
    return res
}

// 方法2
function fateArray2(arr) {
    return arr.toString().split(',').map(item => parseInt(item))
}

// 方法3
function fateArray3() {

}

let arr = [1, [2 ,3], [[4], [5, 6]]]

console.log(fateArray2(arr))
