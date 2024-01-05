const fs = require('fs');

fs.readFile('day7.txt', 'utf-8', (err, data) => {
    if (err) throw err;


    let arr = data.split('\r\n');
    console.log(arr)
    
    for (let i = 0; i < arr.length; i++) {
        console.log('test');
         arr[i].split('');
    }
    console.log(arr);
});