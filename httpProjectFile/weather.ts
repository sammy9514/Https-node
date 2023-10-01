import http, { IncomingMessage, ServerResponse } from "http";

const port: Number = 2000;

interface iData {
  id: number;
  state: string;
  precipitation: number;
  temperature: number;
}

interface iMessage {
  message: string;
  data: null | {} | {}[];
  success: boolean;
}

let Weather: iData[] = [
  {
    id: 1,
    state: "Abia",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 2,
    state: "Edo",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 3,
    state: "Imo",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 4,
    state: "Niger",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 5,
    state: "Bauchi",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 6,
    state: "Kwara",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 7,
    state: "Akwa-Ibom",
    precipitation: 30,
    temperature: 50,
  },
  {
    id: 8,
    state: "Enugu",
    precipitation: 55,
    temperature: 15,
  },
  {
    id: 9,
    state: "Kogi",
    precipitation: 12,
    temperature: 60,
  },
  {
    id: 10,
    state: "Ogun",
    precipitation: 60,
    temperature: 20,
  },
  {
    id: 11,
    state: "Benue",
    precipitation: 70,
    temperature: 20,
  },
  {
    id: 12,
    state: "Kano",
    precipitation: 38,
    temperature: 60,
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/JSon");
    let { method, url } = req;
    let status = 404;

    let response: iMessage = {
      message: "Failed",
      success: false,
      data: null,
    };
    let Container: any = [];
    req
      .on("data", (chunk: any) => {
        Container.push(chunk);
      })
      .on("end", () => {
        // GET METHOD
        if (method === "GET" && url === "/getWeather") {
          status = 200;
          response.message = "Wathr info successfully retrieved ";
          response.data = Weather;
          response.success = true;
          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        if (method === "POST" && url === "/ad") {
          const body = JSON.parse(Container);

          let confirm = Weather.find((el) => {
            return el.id === body.id;
          });

          if (!confirm) {
            status = 404;

            response.message = "exist";
            response.success = false;
            response.data = null;
            res.write(JSON.stringify({ status, response }));
            res.end();

            return;
          }
          Weather.push(body);
          status = 200;

          response.message = "Added successfully";
          response.success = true;
          response.data = Weather;
          res.write(JSON.stringify({ status, response }));
          res.end();
        }
      });
  }
);

server.listen(port, () => {
  console.log(`listen on port:${port}`);
});
