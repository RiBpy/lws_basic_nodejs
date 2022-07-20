const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Home</title></head>');
        res.write(
            '<body><h1>Submit Data</h1> <form method="post" action="/process"><input name="message"/></form></body></html>',
        );
        res.end();
    } else if (req.url === '/process') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            console.log('Stream Finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.replace(/[+\d%]*/g, ''));
        });
        res.write('Thank you for Submitting data...');
        res.end();
    } else {
        res.write('Page not found');
        res.end();
    }
});
server.listen(2223);
console.log('listening on port 2223....');
