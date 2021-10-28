/**
 * 给定'(', ')', '{', '}', '[', ']'
 * let s1 = "()[]{}" => true
 * let s2 = "([)]"   => false
 * let s3 = "({})"   => true
 * let s4 = "(){}["
 */
let s = "()[]{}"
let isValid = function (s) {
    let stack = []
    let map = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])
        } else {
            if(stack.pop() != map[s[i]]){
                return  false
            }
        }
    }
    return stack.length === 0 ? true : false
}
console.log(isValid(s))
