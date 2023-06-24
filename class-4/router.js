
const requestHandler = (req, res) => {
    const url = req.url;
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Router</title></head>');
    res.write('<body><h1>Router Page</h1></body>');
    res.write('</html>');    
    res.end();
}

const something = "hello dude";

// ------------- MULTI EXPORT -------------

// ------------- METHOD 1 -------------

// module.exports = {
//     handler: requestHandler,
//     somethingFun: something
// }


// ------------- METHOD 2 -------------

// exports.handler = requestHandler;
// exports.somethingFun = something;


// ------------- METHOD 3 -------------

module.exports.handler = requestHandler;
module.exports.somethingFun = something;