// Stream Module --> A stream is an abstract interface for working with streaming data in Node.js.
// The node:stream module provides an API for implementing the stream interface.

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  // Using file module -->

  // fs.readFile('input.txt', function (err, data) {
  //   if (err) return console.error(err);
  //   res.end(data.toString());
  // });
//------------------------------------------------------------------------------------------------------
  // Using Stream module

//   const rstream = fs.createReadStream("input.txt");

//   rstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end("File not found.");
//   });
//------------------------------------------------------------------------------------------------------
// stream.pipe():- Method used to take a readable stream and connect it to a writeable stream.
// This method will will convert the above explination into a single line of code.

const rstream = fs.createReadStream('input.txt');

rstream.pipe(res);

});



server.listen(8000, "127.0.0.1");