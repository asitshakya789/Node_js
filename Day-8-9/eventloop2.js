const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const a =40;
 
setImmediate(()=>{
    console.log('Immediate 1');
    
});
Promise.resolve(()=>{
    console.log('Promise 1');
});
fs.readFile("file.txt", "utf-8",()=>{
    console.log('file reading');
});
setTimeout(() => {
    console.log("Time expire");   
}, 0);
process.nextTick(()=>{
    console.log('Next tick 1');
});
function printa(){
    console.log('print a', a);

}
printa();
console.log("code is ended ");

