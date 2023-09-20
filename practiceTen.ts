import http, { IncomingMessage, ServerResponse } from "http";
const port = 3067;

interface iData {
  id: number;
  name: string;
  age: number;
}

const data: iData[] = [
  {
    id: 1,
    name: "sammy",
    age: 14,
  },
  {
    id: 1,
    name: "sammy",
    age: 14,
  },
  {
    id: 1,
    name: "sammy",
    age: 14,
  },
  {
    id: 1,
    name: "sammy",
    age: 14,
  },
  {
    id: 1,
    name: "sammy",
    age: 14,
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
    const { url, method } = req;
    let status = 404;
    let response: iMessage = {
      message: "failed",
      success: false,
      data: data,
    };

    const container: any = [];
    req
      .on("data", (bits: any) => {
        container.push(bits);
      })
      .on("end", () => {
        if (url === "/about" && method === "GET") {
          status = 200;
          response.message = "hurray";
          response.success = true;
          response.data = data;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        if (url === "/home" && method === "POST") {
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
