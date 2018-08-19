var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-type':'text/plain'});
res.end('Welcome jaikumar 2080');
}).listen(8080);

console.log('Server is running on a port over 8080 !!');
