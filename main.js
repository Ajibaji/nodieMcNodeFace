// //CREATE SERVER
// var http = require("http");
//
// http.createServer(function (request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World\n');
// }).listen(8081);
//
// console.log('Server up and running on port 8081');

// //SYNCRONOUS BLOCKING EXAMPLE
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program ended");

// //ASYNCRONOUS NON-BLOCKING EXAMPLE
// var fs = require("fs");
// var data = fs.readFile('input.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });
//
// console.log("Program ended");

//EVENT-DRIVEN EXAMPLE
var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function connected(){
  console.log('connection succesful');
  eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
  console.log('data received succesfully.');
});

eventEmitter.emit('connection');
console.log("Program Ended.");
