const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello ');
        res.write('Programmers............');
        res.end();
    } else if (req.url === '/about') {
        res.write('This is from about page');
        res.end();
    } else {
        res.write('Page not found');
        res.end();
    }
});
server.listen(2222);
console.log('listening on port 3001....');
