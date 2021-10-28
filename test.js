function add(arg) {
    // body...
    let sum = 0;
    sum = Array.prototype.slice.call(arguments).reduce((a,b) => {return a+b;},sum);
    var tmpf = function (tmarg) {
        // body...
        if (arguments.length == 0) {
            return sum;
        }else{
            sum = Array.prototype.slice.call(arguments).reduce((a,b) => {return a+b;},sum);
            return tmpf;
        }
    };
    tmpf.toString = tmpf.valueOf = function () {
        // body...
        return sum;
    }
    return tmpf;
}

console.log(add(1)(2)(3) == 6)
