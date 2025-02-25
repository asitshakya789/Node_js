const fs  = require('fs');
const a =1000;

setImmediate(()=>{
    console.log('setImmediate');
});
fs.readFile("file.txt",'utf-8' , ()=>{
    console.log('File Read');   
});

setTimeout(() =>{
    console.log('Timeexpires');
},0);

function printa(){
    console.log("A = ", a);
}
printa();
console.log("End of the code");
