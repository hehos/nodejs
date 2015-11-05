/**
 * Created by hehui on 2015/11/5.
 */

var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.write('<h1>Nodejs  修改了  再次修改了</h1>');
    res.end('<h3>END</h3>');
}).listen(8888);


console.log('http server is listening at port 8888');