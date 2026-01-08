const http = require('http');

const ser= http.createServer((req, res) => {
    res.end('Hello, World!');
});

ser.listen(3000, () => {
    console.log('Server is listening on port 3000');
});