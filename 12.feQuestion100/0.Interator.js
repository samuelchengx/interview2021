let arr = [1, 2, 3, 4]
function makeIterator(arr){
    let index = 0
    return {
        next: function () {
            return index < arr.length ? {
                value: arr[index++],
                flag: false
            } : {
                value: undefined,
                flag: true
            }
        }
    }
}
let res = makeIterator(arr)
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
console.log(res.next())
