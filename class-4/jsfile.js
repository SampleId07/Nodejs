const http = require('http');
const router = require('./router')
const server = http.createServer(router.handler);
console.log(router.somethingFun);
server.listen(3000);