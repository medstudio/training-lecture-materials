const fs = require('fs');
console.log('started');

// node: hey fs please read file name tbrand.csv and  give me a stream manager; 
// variable stream_1 will help me manage the stream;
let stream_1 = fs.createReadStream("./TerritoryBrand.csv");

// let stream_1 =  fs.createReadStream("./test.csv");

let count = 0;

// creating chunk read handler funtion
let chunkReadhandler = (chunk) => {
    // event
    // console.log('chunk received ', chunk.length);
    count++;
}

// node: hey streamManager , whenever you receive a chunked-data event, run this function named chunkReadhandler
// registering the chunk-read-handler
stream_1.on('data', chunkReadhandler);

stream_1.on('end', (chunk) => {
    console.log('chunk finished ', count);
});

console.log("nonsense count = ", count);