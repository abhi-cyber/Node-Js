// The http.createServer() method includes request and response parameters which is supplied by Node.js

// The request object can be used to get info about the current HTTP request
// e.g. url,request header, and data.

// The response object can be used to send a response for a current HTTP request.

// If the response from the HTTP server is supposed to be displayed as HTML, 
// you should include an HTTP header with the correct content type:

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Request successful');
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Listening to the port 8000")
}); // This command will listen to the request.