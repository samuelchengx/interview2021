/**
 * new 实例对象
 * 原型对象
 * 构造函数
 * prototype __proto__ constructor 三角关系
 */

// function Foo() {
//     this.a = 1
// }
// let Foo = new Foo()
// // Foo()
//
// console.log(Foo)
class MyPromise {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(executor) {
        this.status = MyPromise.PENDING
        this.value = null
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value){
        if(this.status === MyPromise.PENDING){
            this.value = value
            this.status = MyPromise.FULFILLED
            setTimeout(() => {
                this.callbacks.forEach(callback => {
                    callback.onFulFilled()
                })
            }, 0)
        }
    }
    reject(reason) {
        if(this.status === MyPromise.PENDING) {
            this.value = reason
            this.status = MyPromise.FULFILLED
        }
    }
    then(onFulFilled, onRejected) {
        if(typeof onFulFilled !== 'function') {
            onFulFilled = ()=>{}
        }
        if(typeof onRejected !== 'function') {
            onRejected = ()=> {}
        }
        return new MyPromise((resolve, reject)=>{
            if(this.status === MyPromise.PENDING){
                this.callbacks.push({
                    onFulFilled: () => {
                        try {
                            let result = onFulFilled(this.value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    },
                    onRejected: () => {
                        try {
                            let result = onRejected(this.value)
                            reject(result)
                        } catch (error) {
                            reject(error)
                        }
                    }
                })
            }
            if(this.status === MyPromise.FULFILLED){
                setTimeout(()=>{
                    try {
                        let result = onFulFilled(this.value)
                        resolve(result)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }
            if(this.status === MyPromise.REJECTED){
                setTimeout(()=>{
                    try {
                        let result = onRejected(this.value)
                        reject(result)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            }
        })
    }
}
let myP = new MyPromise((resolve, reject)=>{
    resolve(2)
}).then((res)=>{
    console.log('--1--', res)
}).then(res=>{
    console.log('--2--',res)
})
// console.log('start')


