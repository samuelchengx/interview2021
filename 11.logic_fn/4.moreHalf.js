let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
// let arr = [1, 2, 3, 4, 5, 6]
function moreThanHalf1(arr) {
    arr.sort()
    let count = 1, flag = undefined
    for (let i = 0; i < arr.length -1; i++) {
        if(arr[i] === arr[i+1]) {
            count++
        } else {
            if(count> arr.length/2){
                flag = i
                break
            }
            count =1
        }
    }
    return flag === undefined ? 'empty': arr[flag]
}

// 方法2: 投票法, 时间复杂度O(N), 空间复杂度O(1)
function moreThanHalf2(arr) {
    let vote = 1
    let x = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(vote == 0){
            x = arr[i]
        }
        if(x==arr[i]) {
            vote += 1
        } else {
            vote -= 1
        }
    }
    return x
}


console.log('超过数组长度一半的数是:',moreThanHalf2(arr))
