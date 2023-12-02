// DAY 2 PART 1

// const fs = require('fs');
// 
// fs.readFile('day2.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
// 
//     data = data.replace(/Game /g, '');
//     data = data.replace(/[:;,.]/g, '');
//     
//     let arr = data.split('\r\n');
//     
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].split(' ')
//     }
//     // console.log(arr);
//     let count = 0;
//
//     for (i = 0; i < arr.length; i++) {
//         for (n = 0; n < arr[i].length; n++) {
//             if (arr[i][n + 1] === 'red' && arr[i][n] > 12) {
//                count += Number(arr[i][0]);
//
//                 break;            
//             }
// 
//             if (arr[i][n + 1] === 'green' && arr[i][n] > 13) {
//                count += Number(arr[i][0]);
//                 // console.log(arr[i][0], 'green')   
//     
//                 break; 
//             }
// 
//             if (arr[i][n + 1] === 'blue' && arr[i][n] > 14) {
//                 count += Number(arr[i][0]);
//
//                 break;            
//             }
//             
//         }
// 
//        }
//
//        let gameSum = 0 
//        for (i = 0; i < arr.length; i++) {
//            gameSum += Number(arr[i][0]);
//        }
//
//        let possibleGameSum = gameSum - count;
//        console.log(possibleGameSum);
//   
//     });


// DAY 2 PART 2
const fs = require('fs');
// 
fs.readFile('day2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
// 
    data = data.replace(/Game /g, '');
    data = data.replace(/[:;,.]/g, '');
    
    let arr = data.split('\r\n');
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ')
    }
    // console.log(arr);
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        let multi = 0;
        let redArr = [];
        let greenArr = [];
        let blueArr = [];

        for (n = 0; n < arr[i].length; n++) {
            if (arr[i][n + 1] === 'red') {
               redArr.push(Number(arr[i][n]));      
            }
// 
            if (arr[i][n + 1] === 'green') {
               greenArr.push(Number(arr[i][n]));
                // console.log(arr[i][0], 'green')   
    
            }
// 
            if (arr[i][n + 1] === 'blue') {
                blueArr.push(Number(arr[i][n]));         
            }
            
        }
        
        redArr.sort((a,b) => a-b);
        greenArr.sort((a,b) => a-b);
        blueArr.sort((a,b) => a-b);
        // console.log(redArr, greenArr, blueArr);

        // console.log(redArr[redArr.length - 1], greenArr[greenArr.length - 1], blueArr[blueArr.length - 1]);
        
        multi = redArr[redArr.length - 1] * greenArr[greenArr.length - 1] * blueArr[blueArr.length - 1];       
        
        count += multi
        console.log(count);
       }
  
    });