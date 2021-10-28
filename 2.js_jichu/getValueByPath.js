/**
 * @param obj
 * @param path
 */
function getValueByPath(obj, path) {
    let props = path.split('.')
    for (let i = 0; i< props.length; i++) {
        let p = props[i]
        if(obj.hasOwnProperty(p)){
            obj = obj[p]
        }else {
            return undefined
        }
    }
    return  obj
}
let objGetProperty = {
    a: {
        b: {
            c: 100
        }
    }
}
console.log(getValueByPath(objGetProperty, 'a.b.c'));
