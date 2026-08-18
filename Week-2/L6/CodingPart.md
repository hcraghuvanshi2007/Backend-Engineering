Info about modules

```bash
const math = require("fs");
```
In _**require function**_ we pass a package as it is. → **It search it in its node directory [built-in packages + external packages (if installed)].**

But, 
```bash
const math = require("./fs");
```
Here , it **will search in current directory.**
