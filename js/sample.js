// const http = require('http');

// const ser= http.createServer((req, res) => {
//     res.end('Hello, World!');
// });

// ser.listen(3000, () => {
//     console.log('Server is listening on port 3000');
// });
// output :
// Hello, World! (in website)
// Server is listening on port 3000 (in terminal)

// const os= require('os');

// console.log('Operating System Information:',os.platform());
// output :
// Operating System Information: win32

function add(a, b) {
    return a + b;
}

module.exports = add;

