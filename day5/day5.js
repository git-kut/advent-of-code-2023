const fs = require('fs');

fs.readFile('day5.txt', 'utf-8', (err, data) => {
    if (err) throw err;

    let arr = data.split('\r\n');
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split(' ').filter(Number.isFinite);
    }

      
    console.log(arr);
});

// class GardenerSystem {
//     constructor() {
//                                     
//     }
// 
//     add() {
// 
//     }
// 
//     seedToSoil() {
// 
//     }
// 
//     soilToFertilizer() {
// 
//     }
// 
//     fertilizerToWater() {
// 
//     }
// 
//     waterToLight() {
// 
//     }
// 
//     lightToTemperature() {
// 
//     }
// 
//     temperatureToHumidity() {
// 
//     }
//     
//     humidityToLocation() {
// 
//     }
// }

