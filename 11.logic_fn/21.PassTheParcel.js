/**
 * 击鼓传花游戏
 */
class queue {
    items = []
    enqueue = (e) => {
        this.items.push(e)
    }
    dequeue = () => {
        return this.items.shift()
    }
    size = () => {
        return this.items.length
    }
    toString = () => {
        return this.items.join(',')
    }
}
function playGame(time, arr, sumTime) {
    return new Promise((resolve, reject)=>{
        let q = new queue()
        arr.forEach(item => {
            q.enqueue(item)
        })
        let target = 0, count = 0
        let timer = setInterval(() =>{
            count += time
            target = q.dequeue()
            console.log(`经过${target}号同学`)
            if(q.size() === 0){
                arr.forEach(item => {
                    q.enqueue(item)
                })
            }
            if(count>= sumTime){
                setTimeout(()=>{
                    clearInterval(timer)
                    resolve(target)
                }, 1000)
            }
        }, time * 1000)
    })
}
playGame(1, [1,2,3,4,5,6], 10).then(res=>{
    console.log(`击鼓传花最后一人是:${res}号同学`)
})
