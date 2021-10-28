/**
 * 自定义promise
 */
class MP {
    static PENDING = 'pending'
    static FULFILLED = 'fulfilled'
    static REJECTED = 'rejected'
    constructor(executor) {
        this.status = MP.PENDING
        this.value = null
        this.callbacks = []
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }
    resolve(value) {
        if(this.status === MP.PENDING){
            this.status = MP.FULFILLED
            this.value = value
            setTimeout(() => {
                this.callbacks.map(callback => {
                    callback.onFulfilled(value)
                })
            })
        }
    }
    reject(reason) {
        if(this.status === MP.PENDING){
            this.status = MP.REJECTED
            this.value = reason
            this.callbacks.map(callback => {
                callback.onRejected(reason)
            })
        }
    }
    then(onFulfilled, onRejected) {
        if(typeof onFulfilled !== 'function'){
            onFulfilled = () => this.value
        }
        if(typeof onRejected !== 'function'){
            onRejected = () => {}
        }
        let promise = new MP((resolve, reject) => {
            if(this.status === MP.PENDING){
                this.callbacks.push({
                    onFulfilled: (value) => {
                        this.parse(promise, onFulfilled(value), resolve, reject)
                    },
                    onRejected: (value) => {
                        this.parse(promise, onRejected(value), resolve, reject)
                    }
                })
            }
            if(this.status === MP.FULFILLED) {
                setTimeout(() => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject)
                    // try {
                    //     let result = onFulfilled(this.value)
                    //     if(result instanceof MP){
                    //         result.then(resolve, reject)
                    //         // result.then(value => {
                    //         //     resolve(value)
                    //         // }, reason => {
                    //         //     reject(reason)
                    //         // })
                    //     } else {
                    //         resolve(result)
                    //     }
                    // } catch (e) {
                    //     reject(e)
                    // }
                })
            }
            if(this.status === MP.REJECTED) {
                setTimeout(() => {
                    this.parse(promise, onRejected(this.value), resolve, reject)
                })
            }
        })
        return promise
    }
    parse(x, result, resolve, reject) {
        if(x == result){
            throw new TypeError(`TypeError: Chaining cycle detected for promise #<Promise>`)
        }
        try {
            if(result instanceof MP){
                result.then(resolve, reject)
            } else {
                resolve(result)
            }
        } catch (e) {
            reject(e)
        }
    }
    static resolve(value) {
        return new MP((resolve, reject) =>{
            if(value instanceof MP){
                value.then(resolve, reject)
            } else {
                resolve(value)
            }
        })
    }
    static reject(reason){
        return new MP((resolve, reject)=>{
            reject(reason)
        })
    }
    static race(promises) {
        return new MP((resolve, reject) => {
            promises.forEach(promise=>{
                promise.then(value=>{
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
    static all(promises) {
        return new MP((resolve, reject) => {
            let resolves = []
            promises.forEach(promise=>{
                promise.then(value=> {
                    resolves.push(value)
                    if(resolves.length === promises.length){
                        resolve(resolves)
                    }
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
    static allSettled(promises) {

    }
}
