/**
 * 求字符串最长公共前缀
 * @type {string[]}
 */
let strs = ["flower","flow","flight"]
function longestCommonPrefix(strs){
    let s = strs[0], pos = []
    for(let i = 1; i < strs.length; i++) {
        for(let j = 0; j < s.length; j++) {
            if(s.charAt(j) !== strs[i].charAt(j)) {
                pos.push(j)
                break
            }
        }
    }
    pos.sort()
    return s.substr(0, pos[0] ? pos[0] : 0)
}
console.log(longestCommonPrefix(strs))


