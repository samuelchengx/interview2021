function printTable(row, col) {
    for(let i = 1; i <= row; i++) {
        let line = ''
        for(let j = 1; j <= i && j <= col; j++ ) {
            line += `${j}*${i}=${i*j} `
        }
        console.log(line)
    }
}
printTable(5, 3)
