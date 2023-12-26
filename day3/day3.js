const fs = require('fs');
// 
fs.readFile('day3.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    let arr = data.split('\r\n');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split('')
    } 
    
    return checkCell(arr)
});

function isNumeric(value) {
    return /^\d+$/.test(value);
}

function isNonAlphanumeric(value) {
    return !/^[a-zA-Z0-9.]+$/.test(value);
}

function checkCell(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; n < arr[i].length; n++) {
            if (isNumeric(arr[i][n]))
                console.log(arr[i][n], ' ..... ', checkNeighbors(i, n, arr));
        }   
    }
}

function fullNumber() {

}

function checkNeighbors(x, y, arr) {
    const coordinates = [
        [x - 1, y - 1],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y - 1],
        [x, y + 1],
        [x + 1, y - 1],
        [x + 1, y],
        [x + 1, y + 1]
    ];
    
    let valid = 0;

    for (let i = 0; i < coordinates.length; i++ ) {
        const [a, b] = coordinates[i];
        if(a > 0 && b > 0 && a < arr.length && b < arr.length) {
            return isNonAlphanumeric(arr[a][b]);
            // valid += 1;
        } 
    }
    // return valid > 0;
}

function sum() {

}