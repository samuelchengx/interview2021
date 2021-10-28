/**
 *
 * 实现对象深拷贝和浅拷贝
 *
 */


// JSON.stringify  JSON.parse 缺点：不可以拷贝 undefined ， function， RegExp 等等类型的


// Object.assign(target, source) 缺点：这是一层对象，如果是有多层嵌套就有问题

// 递归拷贝
function deepClone(obj) {
    let result
    if(typeof obj === 'object') {
        if(Array.isArray(obj)){
            result = []
            for (let key in obj) {
                result.push(deepClone(obj[key]))
            }
        } else if(obj === null) { // 空对象
            result = null
        } else if(obj.constructor === RegExp) { // 正则表达式
            result = obj
        } else { // 普通对象
            result = {}
            for(let i in obj){
                result[i] = deepClone(obj[i])
            }
        }
    } else {
        result = obj
    }
    return result
}

let obj1 = {
    a: {
        c: /a/,
        d: undefined,
        b: null
    },
    b: function () {
        console.log(this.a)
    },
    c: [
        {
            a: 'c',
            b: /b/,
            c: undefined
        },
        'a',
        3
    ]
}
let obj2 = deepClone(obj1);
console.log(obj2);
