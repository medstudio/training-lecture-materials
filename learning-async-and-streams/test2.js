let dosomething = (a, b, callback) => {
    let answer = a + b;
    callback(null, answer)
    return a + b;
}

let x = dosomething(56, 651,
    (err, result) => {
        // do add it buddy, and call this function back once you are finished
        console.log('err = ', err)
        console.log('result = ', result)
    });


console.log('x= ', x)


// what i have
/* 
 --- computation ---  2 x 10^9 Cycles per second
 cpu - ALU, Registers, cache, clock

 --- primary memory --- 1.600 x 10^9 Cycles per second
 ram -
 
 --- I/O ---  ~ 10^3 cycles per second  
 disk - 30 mbps for magnetic | 200 mbps (IO buffer 32MB) -> 7 cycles per sec
 network - 320 MB / 32MB -> 10 cycles per second 
 video - 200 cycles per second
 audio - 3600 bps ~ 1000 per second 
 keyboard - 200 cycles
 mouse - 200 cycles per second
__________________________________________

 total demand:  1617 cycles per second
 cpu :  1000 000 000 cycles per second  

 ayesha makes base in 7 nano seconds 
 swapnali make scream in 1000 000 000 nano seconds

 cpu issue order to disk to read the file 
 cpu block
 disk make scream in 1000 000 000 nano seconds -> 32MB
 cpu makes base in 7 nano seconds 

 cpu await 
 disk make scream in 1000 000 000 nano seconds -> 32MB
 cpu makes base in 7 nano seconds 


 1 files : 1 sec
 2 files : 2 sec
 100 files : 100 sec: wasted : 99.99% cpu time wasted

 */