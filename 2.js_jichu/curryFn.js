function Fn () {
   let sumArgs = [...arguments]
   return sumArgs.reduce((sum, cur)=>{
       return sum * cur
   })
}
function curry(fn, ...args){
    let sumArgs = [...args]
    return function (...argNext) {
        if(argNext.length === 0){
            return fn.apply(null, sumArgs)
        }
        sumArgs.push(...argNext)
        return curry(fn, ...sumArgs)
    }
}

let curryFn = curry(Fn, 1)(2)(3)
console.log(curryFn())
