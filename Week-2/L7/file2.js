const fs = require("fs");

// Sync

//const result = fs.readFileSync('./content.txt', "utf-8");
//console.log(result);

// Async

fs.readFile('./content.txt', "utf-8",(err,result)=>{
    if (err){
        console.log("Error", err);
    }
    else{
        console.log("Result", result);
    }
})