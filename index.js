const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream('./file.txt', 'utf8');
    myReadStream.pipe(res);
});
server.listen(2223);
console.log('listening on port 2223....');
