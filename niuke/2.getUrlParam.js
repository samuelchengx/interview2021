// 获取 url 中的参数
// 1. 指定参数名称，返回该参数的值 或者 空字符串
// 2. 不指定参数名称，返回全部的参数对象 或者 {}
// 3. 如果存在多个同名参数，则返回数组
// 4. 不支持URLSearchParams方法
// function getUrlParam(sUrl, sKey) {
//     let sParam = sUrl.split('?')[1].split('#')[0]
//     let pArr = sParam.split('&')
//     if(sKey){
//         let newArr = []
//         pArr.forEach(function (elm, ind){
//             if(elm.split('=')[0] === sKey){
//                 newArr.push(elm.split('=')[1])
//             }
//         })
//         if(newArr.length === 1){
//             return newArr[0] // 返回参数的值
//         } else if(newArr.length === 0){
//             return '' // 没有就返回空字符串
//         } else {
//             return newArr // 多个同名参数返回数组
//         }
//     } else { // 没有筛选条件
//         let newObj = {}
//         pArr.forEach(function (elm, ind){
//             let key = elm.split('=')[0], value = elm.split('=')[1]
//             if(!(key in newObj)){
//                 newObj[key] = []
//             }
//             newObj[key].push(value)
//         })
//         return newObj // 返回整个参数对象
//     }
// }

function getUrlParam(sUrl, sKey){
    let pArr = sUrl.split('?')[1].split('#')[0].split('&'),
        obj = {}
    pArr.forEach(function (elm, ind) {
        let [key, value] = elm.split('=')
        if(key in obj) {
            obj[key] = [].concat(obj[key], value)
        } else {
            obj[key] = value
        }
    })
    return sKey ? obj[sKey] || '' : obj
}

// function getUrlParam(sUrl, sKey) {
//     var result, sParam = {};
//     sUrl.replace(/[\?&]?(\w+)=(\w+)/g, function(k0, k1, k2){
//         sParam[k1] === void 0 ? sParam[k1] = k2 : sParam[k1] = [].concat(sParam[k1], k2);
//     });
//     sKey === void 0 || sKey === '' ? result = sParam : result = sParam[sKey] || '';
//     return result;
// }

let paramObj = getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe', 'key');

console.log('paramObj', paramObj)
