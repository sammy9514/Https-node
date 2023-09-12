import http, { IncomingMessage, ServerResponse } from "http";
const port = 2001;

const Dataset = [
  {
    id: "1",
    name: "Ayomide",
    stack: "Full stack",
  },
  {
    id: "1",
    name: "Ayomide",
    stack: "Full stack",
  },
  {
    id: "1",
    name: "Ayomide",
    stack: "Full stack",
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(Dataset));
      res.end();
    }
    res.end();
  }
);

server.listen(port, () => {
  console.log("server is listening", port);
});
