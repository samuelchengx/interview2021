let arr1 = [1,5,6,4,2]
let arr2 = [2,5,4,3,4]
function getRepeat(arr1, arr2) {
    let temp = arr1.filter(item => arr2.indexOf(item) !== -1)
    return temp.sort((a, b)=> a - b)
}
// console.log(getRepeat(arr1, arr2))


function A(){}
/**
 *  A.prototype.__proto__  // Object.prototype
 *  A.prototype.__proto__.__proto__ // null
 *  A.__proto__ // Function.prototype
 *  A.__proto__.__proto__ // Object.prototype
 */




