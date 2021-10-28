/**
 * 最小覆盖子串
 *  ADOBECODEBANC => BANC
 */
let str1 ='ADOBECODEBANC'
function minSubStr(str, sub) {
    let strLen = str.length, subLen = sub.length
    function checkContain(minStr,sub) {
        let flag = true
        sub.split('').forEach(ele => {
            if(minStr.indexOf(ele) === -1){
                flag = false
                return
            }
        })
        return flag
    }

    let cache = [], minLen = 0
    for(let i = 0; i < strLen - subLen; i++) {
        let count = subLen
        while (count<strLen) {
            let temp = str.substr(i, subLen + i)
            let isContain = checkContain(temp, sub)
            if(isContain) {
                console.log(temp)
                break
            }
            continue
        }
    }
    console.log(cache)
}

minSubStr(str1, 'ABC')
