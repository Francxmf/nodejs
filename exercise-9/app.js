const { createServer } = require("node:http");

 function createApp() {
     return createServer((req, res) => {
         res.statusCode  = 200;

         res.setHeader('Content-Type', "text/html");

         res.end("<html><body>The fun guy of fungi - some of them can feed you, some of them can kill you - some, can heal you - some can harm you.</body></html>")
     })
 }

 module.exports = createApp;