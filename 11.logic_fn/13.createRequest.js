// 实现一个createRequest方法（假设浏览器允许无限多的并行请求），调用形式如下图，最后实现效果如图：
// 其中request函数的输入输出和fetch函数保持一致。
// const request = createRequest({
//     pool: 3
// });
// for (let i = 0; i < 10; i++) {
//     request('/user').then(console.log);
// }

function fetch(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(params)
        }, 1000 * parseInt(params) )
    })
}

function createRequest(config){
    let queue= []
    let count = 0
    function doRequest() {
        if(count > config.pool) return
        if(queue.length <= 0) return
        const {
            params,
            resolve,
            reject
        } = queue.shift()
        count++
        fetch(...params).then(resolve, reject).finally(() => {
            count--
            doRequest()
        })
    }
    return (...params) => new Promise((resolve, reject) => {
        queue.push({params, resolve, reject})
        doRequest()
    })
}
let  request = createRequest({
    pool: 3
})
for (let i = 0; i < 10; i++) {
    request(`${i}`).then(console.log)
}
