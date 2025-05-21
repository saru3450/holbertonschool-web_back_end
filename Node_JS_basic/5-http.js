const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
    if (req.url === '/') {
        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        
        const database = path.resolve(__dirname, process.argv[2]);
        try {
            const studentData = await countStudents(database);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`This is the list of our students\n${studentData}`);
        } catch (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end(error.message);
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;