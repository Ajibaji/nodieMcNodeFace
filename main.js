// var http = require("http");
//
// http.createServer(function (request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8081);
//
// console.log('Server up and running on port 8081');


// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program ended");


var fs = require("fs");
var data = fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("Program ended");
