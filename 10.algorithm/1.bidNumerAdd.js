/**
 *  大数相加 9007199254740991 + 1234567899999999999
 */
function bigNumberAdd(n1, n2) {
    let len = n1.length > n2.length ? n1.length : n2.length
    n1 = n1.padStart(len, '0')
    n2 = n2.padStart(len, '0')
    let temp = []
    let current = 0
    let f = 0 // 进位
    for(let i = len-1; i>=0; i--) {
        current = parseInt(n1[i]) + parseInt(n2[i]) + f
        f = Math.floor(current/10)
        temp.unshift(current%10)
    }
    return f > 0 ? '' + f + temp.join('') : temp.join('')
}
console.log(bigNumberAdd('0009007199254740991', '1234567899999999999'))
