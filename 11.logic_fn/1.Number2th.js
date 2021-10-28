let arr = [5, 2, 10, 8, 0, 4, 7, 11, 9, 1]
function array2th(arr) {
    if(arr.length < 2) {
        return console.log('valid arr')
    }
    let min, max
    if(arr[0] > arr[1]){
        min = arr[1]
        max = arr[0]
    }else {
        min = arr[0]
        max = arr[1]
    }
    for (let i = 2; i< arr.length; i++) {
        if(arr[i] > min) {
            if(arr[i] > max) {
                min = max
                max = arr[i]
            } else {
                min = arr[i]
            }
        }
    }
    return min
}

console.log(array2th(arr))

/**
 * 如何在一个无序数组中， 找寻第k大的数呢
 *
 */

function arrayKth(arr, k) {

}
