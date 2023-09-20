import http, { IncomingMessage, ServerResponse } from "http";
const port = 4568;

interface iData {
  id: number;
  name: string;
  age: number;
  stack: string;
}

const data: iData[] = [
  {
    id: 1,
    name: "sammy",
    age: 14,
    stack: "Full-Stack",
  },
  {
    id: 1,
    name: "ahmed",
    age: 133,
    stack: "Full-Stack",
  },
];

interface iMessage {
  message: string;
  success: boolean;
  data: null | {}[];
}

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/Json");
    const { url, method } = req;
    let status = 404;
    let response: iMessage = {
      message: "failed",
      success: false,
      data: data,
    };

    const container: any = [];
    req
      .on("data", (bity: any) => {
        container.push(bity);
      })
      .on("end", () => {
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "weldone";
          response.success = true;
          response.data = data;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        if (url === "/" && method === "POST") {
          status = 201;
          const body = JSON.parse(container);
          data.push(body);
          response.message = " success";
          response.success = true;
          response.data = data;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }
      });
  }
);

server.listen(port, () => {
  console.log("Ran succeful");
});
