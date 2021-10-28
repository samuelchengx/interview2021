/**
 * 实现并发的promise控制函数
 */

class limitPromise{
    constructor() {
        this.list = []
        this.maxNum = 1
        this.currNum = 0
    }
    add(fn) {
        this.list.push(fn)
    }
    doNext() {
        if (this.list.length && this.currNum < this.maxNum) {
            this.currNum++
            this.list.shift()().then(res=>{
                this.currNum--
                this.doNext()
            })
        }
    }
    start() {
        for (let i = 0; i < this.maxNum; i++) {
            this.doNext()
        }
    }
}

let task = new limitPromise()
let timeout = time => new Promise(resolve => setTimeout(resolve,time))
function addTask(time, order) {
    task.add( ()=> timeout(time).then(res=>{
        console.log('order', order)
    }))
}

addTask(1000, 1)
addTask(700, 2)
addTask(500, 3)
addTask(400, 4)

task.start()



