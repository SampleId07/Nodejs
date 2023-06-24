const http = require('http');
const fs = require('fs');


const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;
    console.log(url);
    if(url === '/'){
        response.setHeader('Content-type', 'text/html');
        response.write('<html>')
        response.write('<head><title>Form Page</title></head>')
        response.write('<body>')
        response.write("<form action='/form' method='POST'>")
        response.write("<input type='text' name='name' placeholder='Enter your name'>")
        // response.write("<input type='file' name='file' placeholder='Upload file'>")
        response.write("<input type='submit' value='Log in'>")
        response.write('</form>')
        response.write('</body>')
        response.write('</html>')
        return response.end();
    }
    if(url === '/form' && method === 'POST'){
        // response.setHeader('Location', '/')
        // response.statusCode = 302;
        // return response.end();

        const body = []
        request.on('data', (chunk)=>{
        body.push(chunk)
    })

        request.on('end', ()=>{
        const result = Buffer.concat(body).toString();
        date = new Date();
        console.log(date)
        fs.writeFileSync('docs.txt', result+"\n"+date.toString());
        console.log(result)
    })
        
        response.setHeader('Content-type', 'text/html');
        response.write('<html>')
        response.write('<body>')
        response.write('<h1>Successfully submitted</h1>')
        response.write("<form action='/' method='POST'>")
        response.write("<input type='submit' value='Back'>")
        response.write('</form>')
        response.write('</body>')
        response.write('</html>')
        return response.end();

    }
    response.setHeader('Content-type', 'text/html');
    response.write('<html>')
    response.write('<head><title>Error</title></head>')
    response.write('<body>')
    response.write('<h1>Error</h1>')
    response.write('</body>')
    response.write('</html>')
    response.end();
    
});

server.listen(3000);