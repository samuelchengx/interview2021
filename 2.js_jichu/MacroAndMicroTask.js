/**
 * 宏任务: setTimeout setInterval Dom事件 Ajax请求
 *
 * 微任务: promise async/await
 *
 * 结论1: 微任务的 执行时机 要比 宏任务 早
 *
 * 结论2: 微任务 > dom渲染 > 宏任务
 *
 */

/**
 * 题目1
 */
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// }, 0)
// Promise.resolve().then(()=>{
//     console.log(3)
// })
// console.log(4)
/**
 * 题目2
 */
// console.log(1)
// setTimeout(()=>{
//     console.log(2)
// }, 3000)
// let p = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(3)
//         console.log(4)
//     }, 1000)
// })
// p.then(res => {
//     console.log(res)
// }).finally(() => {
//     console.log(7)
// })
// setTimeout(()=>{
//     console.log(5)
// }, 2000)
// console.log(6)

/**
 * 题目3
 */
let a;
const b = new Promise((resolve, reject) => {
    console.log('promise1')
    resolve();
})
b.then(() => {
    console.log('promise2')
}).then(res => {
    console.log('promise3')
}).then(() => {
    console.log('promise4')
});

a = new Promise(async (resolve, reject) => {
    console.log(a);
    await b;
    console.log(a);
    console.log('after1');
    await a
    resolve(true);
    console.log('after2');
});

console.log('end');


