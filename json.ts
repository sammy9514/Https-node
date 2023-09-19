import http, { IncomingMessage, ServerResponse } from "http";
import { hostname } from "os";
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

const port1 = 2200;

const Data = [
  {
    name: "ayomide",
    age: "17",
  },
  {
    name: "ayomide",
    age: "17",
  },
];

const thatServer = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(Data));
      res.end();
    }
    res.end();
  }
);

thatServer.listen(port1, () => {
  console.log("runnig", port1);
});
