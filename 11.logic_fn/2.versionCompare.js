// let arrData = ['1.2.3','2.2.1','10.1.0','9.99.9','10.1.0']
let arrNewData = [
    '1.6.0',
    '1.5.4',
    '2.6.0-rc.1',
    '2.6.0',
    '2.6.0.alpha',
    '1.5.3',
    '2.6.0.rc',
]
function sortVersion(arr) {
    for (let i = 0; i <arr.length; i++) {
        console.log(arr[i])
        arr[i] = arr[i].split('.')
    }
    arr.sort(function (a, b) {
        return a[0] - b[0] || a[1] - b[1] || a[2] - b[2]
    })
    for (let i = 0; i <arr.length; i++) {
        arr[i] = arr[i].join('.')
    }
}
sortVersion(arrNewData)
