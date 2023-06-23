const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    console.log(req);
    res.write('<html>')
    res.write('<head><title>Server-3000</title></head>')
    res.write('<body>')
    res.write('<h1>Hello world</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end();
})
server.listen(3000)
