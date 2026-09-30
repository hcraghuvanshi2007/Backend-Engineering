const http = require('http');
const myServer = http.createServer((req, res) => {
//    console.log("New Req Rec.");
//    console.log(req.headers);
    console.log(req);
    res.end("Hello From Server");
});
myServer.listen(8000, () => console.log("Server Started!"))
