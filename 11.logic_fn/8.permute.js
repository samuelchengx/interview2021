/**
 * 全排列
 * @param nums
 * @returns {[]}
 */
let permute = (nums) => {
    if(!Array.isArray(nums)){
        nums = nums.split('')
    }
    let res = []
    dfs([])
    function dfs(path){
        if(path.length === nums.length){
            res.push([...path])
            return
        }
        for (let i = 0; i< nums.length; i++) {
            if(path.includes(nums[i])){
                continue
            }
            path.push(nums[i])
            dfs(path)
            path.pop()
        }
    }
    return res
}
console.log(permute('ABC'))
