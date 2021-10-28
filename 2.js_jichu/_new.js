/**
 * 实现new功能
 */
function _new(fn, ...args) {
    let obj = {}
    obj.__proto__ = fn.prototype
    let r = fn.apply(obj, args)
    return r instanceof Object ? r : obj
}
/**
 * 测试_new功能
 */
function Fn(name){
    this.name = name
    this.sayName = function () {
        console.log(this.name)
    }
    // return 1
    // return {
    //     name: 'Gina',
    //     sayName: function () {
    //         console.log(this.name)
    //     },
    //     say: function (msg) {
    //         console.log(`${this.name} ${msg}`)
    //     }
    // }
}
Fn.prototype.say = function (msg) {
    console.log(`${this.name} ${msg}`)
}
let person = _new(Fn, 'samuel')
person.sayName()
person.say('hello')



