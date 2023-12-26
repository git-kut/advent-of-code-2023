// DAY 4 PART 1

// const { countReset } = require('console');
// const fs = require('fs');
// 
// fs.readFile('day4.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
// 
//     let replacementString = '';
// 
//     for (let i = 1; i <= 189; i++) {
//         let pattern = new RegExp(`Card ${i}: `);
//         data = data.replace(pattern, replacementString);
//     }
// 
//     data = data.replace(/\r\n/g, ' | ');
//     // console.log(data);
//     // data = data.replace(/Card/g, '');
// 
//     let arr = data.split(' | ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split(' ')
//     } 
// 
//     let sum = 0;
//     for (let i = 0; i < arr.length; i+=2) {
//         let count = 0;
//         for (let n = 0; n < arr[i].length; n++) {
//             if (Number(arr[i][n]) > 0 && arr[i + 1].includes(arr[i][n]) === true) {
//                 count += 1
//             }
//         }
//         console.log(count, sum);
//         sum += 2 ** (count - 1);
//         sum = Math.floor(sum);
//     }
// 
//     console.log(sum);
// 
// });


// DAY 4 PART 2

const { countReset } = require('console');
const fs = require('fs');

fs.readFile('day4.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    let replacementString = '';

    for (let i = 1; i <= 189; i++) {
        let pattern = new RegExp(`Card ${i}: `);
        data = data.replace(pattern, replacementString);
    }

    data = data.replace(/\r\n/g, ' | ');
    // console.log(data);
    data = data.replace(/Card/g, '');

    let arr = data.split(' | ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ')
    } 
    let array = []; 
    let sum = 0;
    for (let i = 0; i < arr.length; i+=2) {
        let count = 0;
        for (let n = 0; n < arr[i].length; n++) {
            if (Number(arr[i][n]) > 0 && arr[i + 1].includes(arr[i][n]) === true) {
                count += 1
            }
        }
        
        let cardAmount = 1
        array.push({winning: count, cardAmount: cardAmount});
    }

    
    for (let i = 0; i < array.length; i++) {
        for (let n = 1; n <= array[i].winning; n++) {
            array[n + i].cardAmount += array[i].cardAmount;
        }
    }

    let totalCardAmount = 0;

    array.forEach((value) => totalCardAmount += value.cardAmount);

    console.log(totalCardAmount);

});

