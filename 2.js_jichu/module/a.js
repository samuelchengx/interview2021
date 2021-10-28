let obj = {
    arr: [1, 2, 3],
    name: 'test',
    map: {
        '1': 'A'
    },
    fn: () => {
        console.log('hello')
    }
}

function add(a, b) {
    return a + b
}

function minus (a , b) {
    return a - b
}

function printObj (){
    console.log(obj)
}

export {
    obj as INFO,
    add as SUM,
    minus as PLUS,
    printObj
}
