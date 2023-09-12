import http, { IncomingMessage, ServerResponse } from "http";

const port = 7070;

const createServer = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200);
    res.write("hello");
    res.end();
  }
);

createServer.listen(port, () => {
  "weldon";
});
