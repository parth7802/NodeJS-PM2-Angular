const http = require('http');
const hostname = '192.168.74.128' (IP_ADDRESS);
const port = 3000 (PORT);
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('This is the Main App!\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
