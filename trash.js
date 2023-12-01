const fs = require('fs')

// const str = new fs.readFile('day1.txt');
// 
// const arr = str.split(' ');
// 
// console.log(arr);

fs.readFile('day1.txt', 'utf-8', (err, data) => {
    if (err) throw err;
 
    // Converting Raw Buffer to text
    // data using tostring function.
    const arr = data.split('\r\n');
    let arr2 = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
         
        //let checker = count + arr[i];
        //if (checker === count) {
        //    arr2.push(count);
        //    count = 0;
        //}
        if(arr[i] != ' ') {
            count += arr[i]
        }
        else {
            arr2.push(count);
            count = 0;
        }
    }
    console.log(arr2);
})