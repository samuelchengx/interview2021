function getColor(){
    return `#${Math.random().toString(16).substr(2, 6).toUpperCase()}`
}
console.log(getColor())
