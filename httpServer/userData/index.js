const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const data = fs.readFileSync("../UserApi/userapi.json", "utf-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("This is the Home Page");
  } else if (req.url == "/about") {
    res.end("This is the AboutUs Page.");
  } else if (req.url == "/contact") {
    res.end("This is the ContactUs Page.");
  } else if (req.url == "/userapi") {
    // fs.readFile("../UserApi/userapi.json", "utf-8", (err, data) => {
    //   console.log(data);
    //   // Code to call a specific field from the data first convert it into an object.
    //   const objData = JSON.parse(data);
    //   res.end(objData[0].name);
    // });
    res.writeHead(200, {"content-type" : "application/json"})
    res.end(objData[0].name);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 ERROR. Page does not exist.</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port 8000");
});
