const http = require('http');
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url)
    if(url=='/'){
        res.setHeader('Content-type', 'text/html')
        res.write('<html>')
        res.write('<head><title>form page</title></head>')
        res.write('<body>')
        res.write("<form action='/message' method='POST'><input type='text' name='message'><input type='submit' value='submit'></form>")
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }

    if(url=='/message' && req.method=='POST'){
        res.setHeader('Location', '/')
        res.statusCode=302;

    }
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Server-3000</title></head>')
    res.write('<body>')
    res.write('<h1>Hello world</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
})
server.listen(3000)
