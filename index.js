var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('This is NodeJS App on AWS EC2 Instance'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80
