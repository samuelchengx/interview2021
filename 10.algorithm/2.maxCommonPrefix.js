let strArr = ['follow', 'foleee', 'fox']
function maxCommonPrefix(arr){
    let first = arr[0]
    arr.shift()
    let maxCount = 0
    for(let i =0; i < arr.length; i++) {
        let count = 1
        while (count<=first.length) {
            if(first.substr(0,count) == arr[i].substr(0, count)) {
                count++
                continue
            } else {
                maxCount > 0 ? maxCount = Math.min(maxCount, count-1) : maxCount = count-1
                break
            }
        }
    }
    return first.substr(0, maxCount)
}
console.log(maxCommonPrefix(strArr))
