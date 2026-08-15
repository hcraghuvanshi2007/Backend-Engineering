[//]: # (// Coding Part)
We have created package.json file directly using the command **_`npm init -y`_** - which creates a package.json file with default values.
### 1. To run a file (without package)  
```bash
node filename.js
node filename
# Example:
node index
```

### 2. To run a file (with package)  
Define the command in the `"scripts"` section of your `package.json`:
```json
"scripts": {
  "start": "node index.js"
}
```

**_Scripts:_** These are used to define custom terminal commands to automate repetitive tasks or run specific operations.

Then in the terminal, run:
```bash
npm run start
```
**_Output:_** 
```json
PS D:Week-1/L3> npm run start

> l3@1.0.0 start
> node index.js

First node program // Runs the index.js file
```
