/**
 * 实现一个call调用
 */
function a(){
    console.log(1, this, arguments)
}
function b(){
    console.log(2, this, arguments)
}
// api调用
// a.call()
// a.call('hello', 1, 2, 3)
// a.call.call(b)
// my_call实现
Function.prototype.my_call = function (context) {
    context = context ? Object(context) : window
    context.fn = this
    let args = []
    for(let i = 1; i < arguments.length; i++){
        args.push(arguments[i])
    }
    let r = eval(`context.fn(${args})`)
    delete context.fn
    return r
}
//a.my_call('hello', 1, 2, 3)
// a.my_call.my_call(b)
// a.apply.apply('hello', [1, 2, 3])
/**
 * 实现一个apply调用
 */
Function.prototype.my_apply = function(context, args) {
    context = context ? Object(context) : window
    context.fn = this
    if(!args) {
       return context.fn()
    }
    let r = eval(`context.fn(${args})`)
    delete context.fn
    return r
}

// a.my_apply('hello', [1, 2, 3])
// a.my_apply.my_apply(b)
