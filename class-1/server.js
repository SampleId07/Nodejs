/* 

Getting http (Hyper Text Transfer Protocol) using the require() method.
Make a server by using the http and createServer() method it calling the function with two argument , the arguments are request and response.
Request used for When user request to server and
Response used for get the response from the server.
Finally we can listen the server by using the listen() method and put the port number in the argument.

*/

const http = require('http');

const  server = http.createServer((request, response) => {
    console.log(request);
});

server.listen(3000)