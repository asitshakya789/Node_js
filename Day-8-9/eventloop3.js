const fs = require('fs');

setImmediate(() => console.log('immediate'));

setTimeout(() => console.log('time Expired'), 0);

Promise.resolve().then(() => console.log("promises"));

fs.readFile('file.txt', 'utf-8', (err, data) => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd next tick"));

    setImmediate(() => console.log("2nd immediate"));
    console.log("2nd file read");
});

process.nextTick(() => console.log("next tick"));

console.log("code has been ended");
