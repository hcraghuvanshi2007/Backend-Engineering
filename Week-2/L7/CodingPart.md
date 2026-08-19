#### -> File Handling :
- It means to do operation on files
- ex, read , edit files 
#### Creating a file using :
1. writeFileSync [Synchronous]
```bash
 fs.writeFileSync('./test.txt','hello world')
 ```
* It will create a _**test.txt**_ file with **_hello world_** content.
* If we again run it, it will overwrite the content.

2. writeFile [ Asynchronous ]
```bash
fs.writeFile('./test.txt','Heyyy',(err)=>{})
```
* It will create a _**test.txt**_ file with **_Heyyy_** content.


#### Reading a file using:
1. readFileSync  [ Synchronous ]
```bash
const result = fs.readFileSync('./content.txt', "utf-8");
console.log(result);
```

2. readFile [ Asynchronous ]
```bash
fs.readFile('./content.txt', "utf-8",(err,result)=>{
    if (err){
        console.log("Error", err);
    }
    else{
        console.log("Result", result);
    }
})
```
