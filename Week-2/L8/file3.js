const fs = require("fs");
//fs.writeFile('./test.txt','Heyyy',(err)=>{})
// Appending to the File

// Sync

//fs.appendFileSync('./test.txt', `System hang krdenge\n`);

fs.appendFileSync('./test.txt', `${Date.now()} User\n`);


// Copy File
fs.cpSync("./test.txt","./copy.txt",{})




fs.readFile('./test.txt', "utf-8",(err,result)=>{
    if (err){
        console.log("Error", err);
    }
    else{
        console.log("Result", result);
    }
})