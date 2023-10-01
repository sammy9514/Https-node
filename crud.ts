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
        //GET
        if (method === "GET" && url === "/") {
          status = 200;
          response.message = "Data gotten successfully";
          response.data = data;

          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //POST
        if (method === "POST" && url === "/") {
          let body = JSON.parse(container);
          data.push(body);

          status = 200;
          response.message = "Data added succesfully";
          response.data = data;

          res.write(JSON.stringify({ response, status }));
          res.end();
        }

        //PATCH method
        if (method === "PATCH") {
          const build = JSON.parse(container);
          let getId: any = url?.split("/")[1];
          let idToNum = parseInt(getId);
          let findObjId = data.findIndex((el) => {
            return el.id === idToNum;
          });
          if (findObjId === -1) {
            status = 404;
            response.message = "user not found";
            response.data = null;

            res.write(JSON.stringify({ response, status }));
          } else {
            const newName = build.name;

            data = data.map((user) => {
              if (user.id === idToNum) {
                return {
                  id: user.id,
                  name: newName,
                  age: user.age,
                  set: user.set,
                };
              }
              return user;
            });
            status = 200;

            response.message = "updated";
            response.data = data;
            res.write(JSON.stringify({ response, status }));
            res.end();
          }
        }

        if (method === "PUT") {
          const build = JSON.parse(container);
          let getId: any = url?.split("/")[1];
          let numId = parseInt(getId);
          let findObObjId = data.findIndex((el) => {
            return el.id === numId;
          });

          if (findObObjId === -1) {
            response.message = "failed";
            response.data = null;
            status = 404;

            res.write(JSON.stringify({ response, status }));
          } else {
            const updateName = build.name;
            const updateAge = build.age;
            const updateSet = build.set;

            data = data.map((user) => {
              if (numId === user.id) {
                return {
                  id: user.id,
                  name: updateName,
                  age: updateAge,
                  set: updateAge,
                };
              }
              return user;
            });

            status = 200;
            response.message = "success";
            response.data = data;
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
//    const build = JSON.parse(container);

//    let details: any = url?.split("/")[1];
//    let datavalue = parseInt(details);
//    console.log(details);
//    let findobject = data.findIndex((el) => {
//      return el.id === datavalue;
//    });
//    // console.log(findobject);

//    if (findobject === -1) {
//      status = 404;

//      (response.message = "user not Found"),
//        (response.data = null),
//        // (response.success = false);

//        res.write(JSON.stringify({ response, status }));

//      res.end();
//    } else {
//      const updateuserage = build.age;

//      data = data.map((user: any) => {
//        if (user?.id === datavalue) {
//          return {
//            id: user?.id,
//            name: user?.name,
//            age: updateuserage,
//          };
//        }

//        return user;
//      });

//      status = 200;

//      (response.message = "User Updated"),
//        (response.data = data),
//        // (response.success = true);

//        res.write(JSON.stringify({ response, status }));

//      res.end();
//    }
//  }
