// let obj = {}, obj1 = {}
//
// console.log(obj === obj1) // 比较内存地址

/**
 * 1、原型继承
 * 实例修改父类属性， 其他实例也会被修改
 */
// function Parent() {
//     this.address = 'China, Beijing'
// }
// Parent.prototype.sayName = function () {
//     console.log(this.name, this.address)
// }
// function Child(name) {
//     this.name = name
// }
// Child.prototype = new Parent()
// let c1 = new Child('sam')
// let c2 = new Child('gina')
// Child.prototype.sayName = function(){
//  console.log(1111)
// }
// // c1.sayName()
// // c2.sayName()
/**
 * 2、构造函数继承
 * 缺点: 只能继承构造函数中的属性和方法
 */
// function Parent(name){
//     this.name = name || 'name'
// }
// function son(age, name){
//     Parent.call(this, name)
//     this.age = age
// }
// let son1 = new son(18, 'sam')
// console.log(son1)

/**
 * 3、组合继承
 */
// function Parent(name){
//     this.name = name
// }
// Parent.prototype.say = function () {
//     console.log(`${this.name}:${this.age}`)
// }
// function Son(age, name){
//     Parent.call(this, name)
//     this.age = age
// }
// Son.prototype = new Parent()
// let son1 = new Son(18, 'sam')
// console.log(son1)
// son1.say()

/**
 * 4、寄生继承
 * 完美方案
 */
// function Parent(name){
//     this.name = name || 'ee'
// }
// Parent.prototype.say = function () {
//     console.log(this.name, this.age)
// }
// let sup = new Parent()
// function Content(obj){
//     function fn(){}
//     fn.prototype = obj
//     return new fn()
// }
// function son(obj){
//     let sub = Content(obj)
//     sub.age = 18
//     return sub
// }
// let son1 =son(sup)
// console.log(son1)
// son1.say()

/**
 * 5、寄生 + 组合继承
 */
function Parent(name){
    this.name = name || 'parent'
}
Parent.prototype.say  = function () {
    console.log(`${this.name}: ${this.age}`)
}
let sup = new Parent()
function content(obj) {
    function fn(){}
    fn.prototype = obj
    return new fn()
}
function son(age, ...args) {
    Parent.call(this, ...args)
    this.age = age
}
son.prototype = sup
son.constructor = son
let son1 = new son(18, 'sam')
son1.say()




















