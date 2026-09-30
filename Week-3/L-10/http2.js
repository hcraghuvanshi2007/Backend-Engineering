const http = require('http');
const fs = require("fs");
const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`;
