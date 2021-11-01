/**
 * ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 * @type {Set<any>}
 */
const s = new Set()
let arr = [2, 3, 5, 4, 5, 2, 2]
arr.forEach(item=>{
    s.add(item)
})
// console.log('---s---', s)
for (let i of s) {
    // console.log(i)
}
/**
 * ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
 */

let m = new Map([
    ['name', '张三'],
    ['title', 'Author']
])
console.log('---m---', m)
let o = {a:1}
m.set(o, 'content')
console.log('---m---', m)
