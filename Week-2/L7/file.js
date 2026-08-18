const fs = require("fs");

// Sync
//fs.writeFileSync('./test.txt','hello world')
//fs.writeFileSync('./test.txt','Heyyy')

// Async
fs.writeFile('./test.txt','Heyyy',(err)=>{})