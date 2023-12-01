const fs = require('fs');

fs.readFile('day1.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    
    data = data.replace(/one/g, 'o1e');
    data = data.replace(/two/g, 't2o');
    data = data.replace(/three/g, 't3e');
    data = data.replace(/four/g, 'f4r');
    data = data.replace(/five/g, 'f5e');
    data = data.replace(/six/g, 's6x');
    data = data.replace(/seven/g, 's7n');
    data = data.replace(/eight/g, 'e8t');
    data = data.replace(/nine/g, 'n9e');


    let arr = data.split('\r\n');

    console.log(arr);
    const combArr = []

    for (let i = 0; i < arr.length; i++) {
    
        arr[i] = arr[i].split('').filter(Number);
        
        let first = arr[i].shift(0);
        let last = arr[i].pop();
        
        if (last) {
            let comb = first + last;
            combArr.push(Number(comb));
        }
    
        else {
            combArr.push(Number(first + first));
        }
    }

    let count = 0
    console.log(combArr);
    for (let number of combArr) {
         count += number;
     }
     console.log('count', count);

});

