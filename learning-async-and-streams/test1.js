const fs = require('fs');
console.log('started');

let dataoffile = fs.readFile('./test.csv',
    (err, data) => {
        console.log('i did read it');
        // Asynchronously reads the entire contents of a file.
        // results are deferred
        console.log('has error= ', !!err);
        if (!!err) {
            console.log('read the error= ', err);
        } else {
            console.log('file content = ', data.toString().split(',') )
        }
        // console.log(data);
    });

console.log('i will do other things (17 ka table)');
console.time("billion")
for (let i = 0; i < 1000000000; i++) {
    // console.log('i = ', i * 178);
}
console.timeLog("billion")
console.timeEnd("billion")
console.log('i am done doing other things');


console.log("dataoffile=", dataoffile);




// let dataoffile2 = fs.readFileSync('./tesst.csv');
// console.log("dataoffile2=", dataoffile2);