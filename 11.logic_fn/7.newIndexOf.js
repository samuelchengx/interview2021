let originStr = '1234567'
function newIndexOf(pStr, cStr, n) {
    // n为起始位置
    let i // 循环变量
    let len1 = pStr.length // 父串长度
    let len2 = cStr.length // 子串长度
    // 判断起始位置是否合法
    if(n === undefined || n === null || n < 0) {
        i = 0
    } else if(n> len1 -1){
        return -1
    } else {
        i = n
    }
    // 判断子字符串是否合法
    if(len2 > len1) { // 子字符串大于父串，肯定不存在
        return -1
    } else if(len2 == len1) {
        if(pStr === cStr){
            return 0
        } else {
            return -1
        }
    } else {
        let tempStr = ''
        while (i < len1) {
            tempStr = pStr.substr(i, len2)
            if(tempStr===cStr) {
                return i
                break
            }
            i++
        }
        if(i == len1){
            return  -1
        }
    }
}
console.log(newIndexOf(originStr, '45'))
