const http = require("http");

const Port = 1000;
const Port1 = 2000;
const Port2 = 3000;
const Port3 = 4000;
const Port4 = 5000;

// const server = http.createServer((request, response) => {
//   response.writeHead(200);
//   response.write("server is up and running ^_____^ :D :(");
//   response.end();
// });
// server.listen(Port, () => {
//   console.log("server is up and running");
// });

// const part = http.createServer((req, res) => {
//   res.writeHead(200);
//   res.write("Hello world");
//   res.end();
// });
// part.listen(Port1, () => {
//   console.log("Hello world");
// });

// const app = http.createServer((tom, tab) => {
//   tab.writeHead(200);
//   tab.write("You are mad");
//   tab.end();
// });
// app.listen(Port2, () => {
//   console.log("You are mad");
// });

// const hello = http.createServer((y, z) => {
//   z.writeHead(200);
//   z.write("use your head");
//   z.end();
// });
// z.listen(Port3, () => {
//   console.log("sup");
// });

// const j = http.createServer((e, t) => {
//   t.writeHead(200);
//   t.write("hf");
//   t.end();
// });
// j.listen(Port4, () => {
//   console.log("gv");
// });s

const newServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is my home Page.</p></body></html`);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is my about Page.</p></body></html`);
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<html><body><p>This is my contact Page.</p></body></html`);
    res.end();
  } else res.end("Invalid request");
});
newServer.listen(Port4, () => {
  console.log("server is listening to port on port", Port4);
});
