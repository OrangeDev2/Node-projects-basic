const http = require('http');

const server = http.createServer(function(req,res){
    if (req.url === '/'){
        res.write(`Your IP Address is ${req.ip}`);
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]))
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');