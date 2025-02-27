const fs = require('fs');
const path = require('path');
setImmediate(()=>{
    console.log('immediate');
});
setTimeout(()=>{
    console.log('timeout');
});
Promise.resolve(()=>{
    console.log('promise');
})
fs.readFile("file.txt",'utf-8',()=>{
    console.log('readFile');
});

process.nextTick(()=>{
    process.nextTick(()=>{
    console.log('nextTick2')});
    console.log('nextTick');
});
console.log("last line of code ");
