// DAY 6 PART 1
// const { count } = require('console');
// const fs = require('fs');
// 
// fs.readFile('day6.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
// 
// 
//     let arr = data.split('\r\n');
//     
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split(' ').filter(Number);
//     }
//     console.log(arr);
// 
//     let waysToWin = [];
// 
//     for (let j = 0; j < 4; j++) {
//         let time = Number(arr[0][j]);
//         let distance = Number(arr[1][j]);
//         let count = 0;
//         for (let i = 0; i < time; i++) {
//             let hold = i;
//             let RaceTime = time - hold;
//             if (RaceTime * hold > distance) {
//                 count += 1
//             }
//         }
//         waysToWin.push(count);
//     }
//     console.log(waysToWin);
// 
//     let multiply = 1;
//     for (let i = 0; i < waysToWin.length; i++) {
//         multiply *= waysToWin[i];
//     }
//     console.log(multiply);
// 
// });

// DAY6 PART 2
const { count } = require('console');
const fs = require('fs');

fs.readFile('day6.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    data = data.replace(/Time:/g, '')
    data = data.replace(/Distance:/g, '')
    data = data.replace(/ /g, '')
    console.log(data);

    let arr = data.split('\r\n');
    console.log(arr);
     for (let i = 0; i < arr.length; i++) {
         arr[i].split(' ');
     }
    console.log(arr);

    let waysToWin = [];


    let time = Number(arr[0]);
    let distance = Number(arr[1]);
    let count = 0;
    for (let i = 0; i < time; i++) {
        let hold = i;
        let RaceTime = time - hold;
        if (RaceTime * hold > distance) {
            count += 1
        }
    }
    waysToWin.push(count);
    
    console.log(waysToWin);

    let multiply = 1;
    for (let i = 0; i < waysToWin.length; i++) {
        multiply *= waysToWin[i];
    }
    console.log(multiply);

});