var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-type':'text/plain'});
res.end('Welcome ECS');
}).listen(9001);

console.log('Server is running on a port over 9001 !!');
