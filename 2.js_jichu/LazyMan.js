/**
 * 实现一个LazyMan流程控制
 */
function LazyMan(name) {
    return new _LazyMan(name)
}

function _LazyMan(name) {
    this.name = name
    this.promises = []
    let fn = () => {
        console.log(`name is ${name}`)
        return Promise.resolve()
    }
    this.promises.push(fn)
    let template = Promise.resolve()
    setTimeout(()=>{
        this.promises.forEach(fn=>{
            template = template.then(fn)
        })
    }, 0)
}

_LazyMan.prototype.sleep = function (time) {
    let fn = () => {
        let sp = new Promise((resolve, reject)=>{
            console.log(`sleep暂停${time}s!`)
            setTimeout(()=>{
                console.log(`执行sleep~`)
                resolve()
            }, time * 1000)
        })
        return sp
    }
    this.promises.push(fn)
    return this
}

_LazyMan.prototype.eat = function (name) {
    let fn = () => {
        let ep = Promise.resolve()
        console.log(`吃${name}~`)
        return ep
    }
    this.promises.push(fn)
    return this
}

_LazyMan.prototype.FirstSleep = function (time) {
    let fn = () => {
        let fp = new Promise((resolve, reject)=>{
            console.log(`FirstSleep暂停${time}s!`)
            setTimeout(()=>{
                console.log(`执行FirstSleep~`)
                resolve()
            }, time * 1000)
        })
        return fp
    }
    this.promises.splice(1, 0, fn)
    return this
}

LazyMan('LazyMan').FirstSleep(5).sleep(4).eat('晚饭')


