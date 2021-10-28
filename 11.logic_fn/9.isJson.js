let str1 = '<p>this is a test</p>'
let str2 = '{"a":{"aa":"","ab":["aaa",[],1,{}],"ac":null,"ad":{}},"b":""}'
let isJSON = function(str) {
    if(typeof str === 'string') {
        try {
            let obj = JSON.parse(str)
            if(typeof obj == 'object' && obj) {
                return true
            } else {
                return false
            }
        } catch (err) {
            console.log('err', err)
            return false
        }
    }
 }
console.log('result:', isJSON(str2))
