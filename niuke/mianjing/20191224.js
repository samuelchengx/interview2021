function _new(){
    let obj = {}
    let fn = Array.prototype.shift.call(arguments)
    obj.__proto__ = fn.prototype
    let result = fn.apply(obj, Array.prototype.slice.call(arguments))
    return result instanceof Object ? result : obj
}


function test(name){
    this.name = name
    this.sayName = function () {
        console.log(this.name)
    }
}

test.prototype.sayMsg = function (msg) {
    console.log(`${this.name} say ${msg}`)
}

let p = _new(test, 'Samuel')

p.sayName()
p.sayMsg('Hello')
