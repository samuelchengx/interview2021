var d = {
    value : 1,
    key: a
}
var c = {
    value: d
}
var b = {
    value: c
}
var a = {
    value: b
}
let cache = []
let str = JSON.stringify(a, function (key, value){
    if(typeof value === 'object' && value !== null){
        if(cache.indexOf(value) !== -1){
            return
        }
        cache.push(key)
    } else if(value === undefined){
        return 'empty'
    }
    return value
})
console.log(str)
cache = null
