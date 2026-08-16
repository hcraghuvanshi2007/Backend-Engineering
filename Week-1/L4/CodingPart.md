We have done basic now,

* Now in production world when we will do real world programming **we will have multiple functions**.
* Then we will have to divide our codebase into multiple modules.
* So we have to **split code into multiple files**:

#### _`So, in this Lec-4 we will learn how to split our code into multiple files.`_

We have 3 files in this Lec-4:
1. **index.js**
2. **math.js**
3. **package.json**

* _**index.js:**_ is the **main file** that will be executed when we run the program.  
* **_math.js:_** is the file that **contains the math functions**.  
* **_package.json:_** is the file that contains the package information.

Step 1: _maths.js_
```json3
function add(a,b){
    return a+b;
}

module.exports = "Rounak"; // will export "Rounak" to other files
```
Step2: _index.js_
```json3
const math = require('./math'); // it will import math.js file
console.log("Math Value is:",math); // print the value of math file
```
Step 3: Output for this -
```json3
PS D:Week-1\L4> npm run start   

> l4@1.0.0 start
> node index.js

Math Value is: Rounak // bc we have exported "Rounak" in math.js file
```
if we want to get the math output of function then :  

`instead of` 

```bash
module.exports = "Rounak";
```
we have to use:

```bash
module.exports = add(9,10);
```
So, after implementing this  
**Final Output:**
```json3
PS D:Week-1\L4> npm run start                                                                  

> l4@1.0.0 start
> node index.js

Math Value is: 17
```

