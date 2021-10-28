// bind js实现参考链接地址 https://www.jianshu.com/p/7030376af23c
// "use strict"
// arguments 是一个对应于传递给函数的参数的类数组对象

function a() {
    console.log(arguments)
    console.log(arguments.callee)
    console.log(a.caller)
    // 根据参数length长度实现方法重载
    if(arguments.length === 1){
        // ...
    } else if(arguments.length === 2){
        // ...
    }
}

function b() {
    a(1,2,3)
}

// b(); // Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
// a(1,2,3); // [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]

/**
 * 数组的几个方法
 * shift unshift
 * slice splice
 */

/**
 * bind方法 就是将函数绑定某个对象
 * bind()会创建一个函数，函数体内的this对象的值会被绑定到传入bind()中的第一个参数的值
 */
Function.prototype.my_bind = function () {
    let self = this
    let context = Array.prototype.shift.call(arguments),
        args = Array.prototype.slice.call(arguments)
    return function () {
        self.apply(context, Array.prototype.concat.call(args, Array.prototype.slice.call(arguments)))
    }
}

function testBind(x, y, z, o) {
    console.log(this.a)
    console.log(x+y+z+o)
}

let obj = {
    a: 100
}

// testBind.my_bind(obj, 1, 2, 3)(4)
function bindThis(fn, oTarget) {
    return function () {
        return fn.apply(oTarget, arguments)
    }
}

bindThis(function(a, b) {
    return this.test + a + b
}, {test: 2})(2, 3);
