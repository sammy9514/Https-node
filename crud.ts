import http, { IncomingMessage, ServerResponse } from "http";
const port = 5700;

interface iData {
  id: number;
  name: string;
  age: number;
  set: number;
}

interface iMessage {
  message: string;
  data: null | {} | {}[];
}

let data: iData[] = [
  {
    id: 1,
    name: "ayomide",
    age: 15,
    set: 8,
  },
  {
    id: 2,
    name: "zion",
    age: 14,
    set: 8,
  },
  {
    id: 3,
    name: "ahmed",
    age: 17,
    set: 8,
  },
  {
    id: 4,
    name: "ekene",
    age: 19,
    set: 8,
  },
];

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    let status = 404;
    res.setHeader("content-type", "application/json");
    const { url, method } = req;

    let response: iMessage = {
      message: "failed",
      data: null,
    };

    const container: any = [];

    req
      .on("data", (chunk: any) => {
        container.push(chunk);
      })
      .on("end", () => {
        //GET method
        if (url === "/" && method === "GET") {
          status = 200;
          response.message = "Success";
          response.data = data;

          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //POST method
        if (url === "/" && method === "POST") {
          const body = JSON.parse(container);
          data.push(body);
          response.message = "Posted";
          response.data = data;

          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //PATCH method

        if (method === "PATCH") {
          const build = JSON.parse(container);

          let details: any = url?.split("/")[1];
          let datavalue = parseInt(details);
          console.log(details);
          let findobject = data.some((el) => {
            return el.id === datavalue;
          });
          // console.log(findobject);

          if (findobject === false) {
            status = 404;

            (response.message = " not Found"),
              (response.data = null),
              // (response.success = false);

              res.write(JSON.stringify({ response, status }));

            res.end();
          } else {
            const updateusername = build.name;

            data = data.map((user: any) => {
              if (user?.id === datavalue) {
                return {
                  id: user?.id,
                  name: updateusername,
                  age: user?.age,
                };
              }

              return user;
            });

            status = 200;

            (response.message = "User Updated"),
              (response.data = data),
              // (response.success = true);

              res.write(JSON.stringify({ response, status }));

            res.end();
          }
        }
      });
  }
);

server.listen(port, () => {
  console.log("running");
});

//  if (method === "PATCH") {
//           const build = JSON.parse(container);

//           let getId: any = url?.split("/")[1];
//           let details = parseInt(getId);
//           console.log(details);

//           let findObjId = data.findIndex((el)=> {
//             return(el.id === details)
//           })

//           if (findObjId === -1) {
//             status = 404
//             response.message = "failed to update"
//             response.data = null
//           }
