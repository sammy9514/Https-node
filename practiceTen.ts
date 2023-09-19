import http, { IncomingMessage, ServerResponse } from "http";
const port = 2400;

interface idata {
  id: number;
  name: string;
}

const data: idata[] = [
  {
    id: 1,
    name: "ayomide",
  },
  {
    id: 1,
    name: "ayomide",
  },
  {
    id: 1,
    name: "ayomide",
  },
  {
    id: 1,
    name: "ayomide",
  },
];

interface iMessage {
  message: string;
  success: boolean;
  data: null | {} | {}[];
}
const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/Json");
    let status = 404;
    const { url, method } = req;
    let response: iMessage = {
      message: "failed",
      success: false,
      data: null,
    };
    const container: any = [];
    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "Successful";
          response.success = true;
          response.data = data;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        if (url === "/server" && method === "POST") {
          status = 201;
          const body = JSON.parse(container);
          data.push(body);
          response.message = "done";
          response.success = true;
          response.data = data;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }
      });
  }
);

server.listen(port, () => {
  console.log("hi");
});
