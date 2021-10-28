let arr = [1, [2, [3, [4, null]]]]
// 实现数组 => [4,[3,[2,[1,null]]]]
function arrayQTReverse(arr) {
    let path = []
    while (arr) {
        path.push(arr.shift())
        arr = arr[0]
    }
    let real = [arr]
    while (path.length) {
        let t = []
        t.push(path.shift(), real[0] ? real.slice(): null)
        real = t
    }
}
arrayQTReverse(arr)
