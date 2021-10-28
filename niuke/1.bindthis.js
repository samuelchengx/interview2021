function bindThis(f, oTarget) {
    // 方法1:
    // return function () {
    // return f.apply(oTarget, arguments)
    // }
    // 方法2:
    // return f.bind(oTarget)
    // 方法3:
    return function () {
        return f.call(oTarget, ...arguments)
    }
}

// 测试用例
// bindThis(function(a, b) {
//     return this.test + a + b
// }, {test: 2})(2, 3);

