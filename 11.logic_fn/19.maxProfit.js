/**
 * 买卖股票的最佳时机
 * [7, 1, 5, 3, 6, 4] => 5
 *
 *
 * [7, 6, 4, 3, 1] => 0
 */
let maxProfit = function (prices) {
    let max = 0
    let minPrice = prices[0]
    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(prices[i], minPrice)
        max =  Math.max(max, prices[i]-minPrice)
    }
    return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))
