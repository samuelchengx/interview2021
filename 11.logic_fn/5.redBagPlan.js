/**
 * 红包分配方案
 * 1.首先给所有人预分配0.01，红包数预先去掉这个数量
 * 2.生成正态分布表达式y=F(x)（对应NormalDistribution方法）
 * 3.根据总红包数量和总人数计算期望和方差（对应compute方法），这边采用的方差策略是期望/10，最小值为0.01
 * 4.随机生成x,y（对应getNum方法），x为横坐标，y为纵坐标，其中x范围为0~红包当前数量，y范围为0到1，每次判断是不是在正态分布区域内，如果不命中，循环生成，直到命中。离期望越近，y越接近1，越容易命中，反之也不容易命中
 * 5.循环进行3，4直到所有人都分配到
 */
const Math_e = Math.E
const Math_pi = Math.PI
const minMoney = 0.01 // 最小红包金额
Number.prototype.fixed = function(n) {
    if(n>0) {
        return parseFloat(this.toFixed(n))
    } else {
        return parseInt(this)
    }

}
function Main(Money, num) {
    const realMoney = (Money - num * minMoney).fixed(2) // 可分配的红包
    if(realMoney<0) return null
    let currentNum = num
    let currentMoney = realMoney
    console.log(`红包总金额${Money}`)
    console.log(`红包瓜分人数${num}`)
    while (currentNum !=0) {
        let nowMoney
        let {
            h,
            r
        } = compute(currentNum, currentMoney)
        if(currentNum === 1){
            nowMoney = currentMoney + 0.01
        } else {
            nowMoney = getNum(0, currentMoney, h, r).fixed(2) + minMoney
        }
        nowMoney = nowMoney.fixed(2)
        console.log(`第${num-currentNum + 1}个人红包为${nowMoney}`)
        currentNum--
        currentMoney-= (nowMoney-minMoney).fixed(2)
        console.log(`剩余红包为${(currentMoney+minMoney*currentNum).toFixed(2)}`)
    }
}
Main(100, 15)
// 计算期望和方差
function compute(num, money) {
    const h = money/num // 期望金额
    let r = money/ (num * 10) // 方差
    r = r < 0.01 ? 0.01 : r
    return {
        r: r,
        h: h.fixed(2)
    }
}
// 正态分布表达式
function NormalDistribution(h, r, x) {
    const base = (1 / Math.log2(2*Math_pi)) * Math_e
    const expon = -((x-h) ** 2) / (2 * (r ** 2))
    return base ** expon
}
// 生成从minNum到maxNum的随机数
function randomNum(min, max) {
    return Math.random() * (max - min) + min
}
// 根据正态分布随机生成一个数
function getNum(min, max, h, r) {
    if(typeof min !== 'number' || typeof max !== 'number' || min > max){
        throw new Error('数据异常')
    }
    if(min === max) return min
    while (true) {
        const x = randomNum(min, max)
        const y = Math.random()
        if(NormalDistribution(h, r, x) > y) {
            return  x
        }
    }
}


