// 第一种情况，super作为函数调用时，代表父类的构造函数。
// class A {
//     constructor() {
//         console.log(new.target.name);
//     }
// }
// class B extends A {
//     constructor() {
//         super(); // 相当于A.prototype.constructor.call(this)
//     }
// }
// new A() // => A
// new B() // => B
// 方法2
// class Parent{
//     static myMethod(msg){
//         console.log('static', msg)
//     }
//     myMethod(msg) {
//         console.log('instance', msg)
//     }
// }
// class Child extends Parent {
//     static myMethod(msg){
//         super.myMethod(msg)
//     }
//     myMethod(msg){
//         super.myMethod(msg)
//     }
// }
// Child.myMethod(1)
// let child = new Child()
// child.myMethod(2)

// class A {
//     constructor() {
//         this.x = 1;
//     }
//     print() {
//         console.log(this.x);
//     }
// }
// class B extends A {
//     constructor() {
//         super();
//         this.x = 2;
//     }
//     m() {
//         super.print();
//     }
// }
// let b = new B();
// b.m() // 2

class A {
    constructor() {
        this.x = 1;
    }
}
class B extends A {
    constructor() {
        super();
        this.x = 2;
        super.x = 3;
        console.log(super.x); // undefined
        console.log(this.x); // 3
    }
}
// let b = new B();


