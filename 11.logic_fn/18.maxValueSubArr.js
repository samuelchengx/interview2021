/**
 * 求连续子数组最大和
 * @type {number[]}
 */
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let maxSubArray = (nums)=> {
    let MaxSum = nums[0]
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    for(let i = 1; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-1], 0) + nums[i]
        MaxSum = Math.max(MaxSum, dp[i])
    }
    return MaxSum
}
/**
 * 优化压缩
 */
let maxSubArray1 = (nums)=> {
    let MaxSum = nums[0]
    let sum = nums[0]
    for(let i = 1; i<nums.length; i++) {
        if(sum>0){
            sum = sum + nums[i]
        } else {
            sum = nums[i]
        }
        MaxSum = Math.max(MaxSum, sum)
    }
    return MaxSum
}
console.log(maxSubArray1(arr))
