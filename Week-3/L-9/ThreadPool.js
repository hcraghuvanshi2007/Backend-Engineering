const os = require("os");
console.log(os.cpus().length);

// OUTPUT = 8 (so max it can handle 8 non-blocking tasks)