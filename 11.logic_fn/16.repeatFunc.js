/**
 * 实现一个执行多次的有间隔的定时器函数
 * repeatFunc("Hello World") // 会输出四次helloworld，每次间隔3s
 */
function repeat (func, times, wait) {
    return async function (...args) {
        for(let i = 0; i < times; i++) {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    func.apply(this, args)
                    resolve()
                }, wait)
            })
        }
    }
}
const repeatFunc = repeat(console.log, 4, 3000)
repeatFunc("Hello World")
