const fs = require("fs");

//fs.writeFile('./unlink.txt','Heyyy',(err)=>{})

// Delete a file

fs.unlinkSync("./unlink.txt");

// Statistic of File

console.log(fs.statSync("./test.txt"));
console.log(fs.statSync("./test.txt").isFile());

// Make a directory
fs.mkdirSync("/my-docs");

fs.mkdirSync("my-docss/a/b", { recursive: true })