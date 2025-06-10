const { createServer } = require('http');

const port = 1245;
const hostname = 'localhost';
const app = createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello Holberton School!');
    res.end();
});

app.listen(port, hostname, () => {
});

module.exports = app;