// console.clear();
// import http, { IncomingMessage, ServerResponse } from "http";
// const port = 2200;

// interface iData {
//   id: number;
//   title: string;
//   description: string;
//   dateIssued: string;
//   dueDate: string;
//   priority: string;
//   completed: boolean;
// }

// let data: iData[] = [
//   {
//     id: 1,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "mild",
//     completed: false,
//   },
//   {
//     id: 2,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "High",
//     completed: true,
//   },
//   {
//     id: 3,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "High",
//     completed: true,
//   },
//   {
//     id: 4,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "less",
//     completed: true,
//   },
//   {
//     id: 5,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "High",
//     completed: true,
//   },
//   {
//     id: 6,
//     title: "coding",
//     description: "Practice everything you've done on node.js",
//     dateIssued: "28|9|2023 - 8pm",
//     dueDate: "28|9|2023 - 10pm",
//     priority: "mild",
//     completed: true,
//   },
// ];

// interface iMessage {
//   message: string;
//   data: null | {} | {}[];
// }
// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.setHeader("Content-Type", "Application/Json");
//     let status = 404;
//     const { method, url } = req;

//     const response: iMessage = {
//       message: "Failed to get user's task",
//       data: null,
//     };

//     let container: any = [];
//     req
//       .on("data", (chunk: any) => {
//         container.push(chunk);
//       })
//       .on("end", () => {
//         //GET
//         if (method === "GET" && url === "/") {
//           status = 200;
//           response.message = "Task gotten successful";
//           response.data = data;

//           res.write(JSON.stringify({ response, status }));
//           res.end();
//         }

//         //GET 2
//         if (method === "GET") {
//           const build = JSON.parse(container);
//           let { priority } = build;
//           const getId: any = url?.split("/")[1];

//           const findData = data.some((el) => {
//             return el.priority === getId;
//           });

//           if (findData) {
//             let p = data.filter((el) => {
//               return el.priority === getId;
//             });

//             status = 200;
//             response.message = "Task gotten successful";
//             response.data = p;

//             res.write(JSON.stringify({ response, status }));
//             res.end();
//           }
//         }

//         //POST
//         if (method === "POST" && url === "/") {
//           const body = JSON.parse(container);
//           data.push(body);

//           status = 201;
//           response.message = "Task added successfully";
//           response.data = data;

//           res.write(JSON.stringify({ response, status }));
//           res.end();
//         }

//         //PATCH
//         if (method === "PATCH") {
//           const build = JSON.parse(container);
//           const getId: any = url?.split("/")[1];
//           const getIdToNum = parseInt(getId);

//           const findData = data.findIndex((el) => {
//             return el.id === getIdToNum;
//           });

//           if (findData === -1) {
//             status = 404;
//             response.message = "Failed to update Task";
//             response.data = data;

//             res.write(JSON.stringify({ response, status }));
//             // res.end();
//           } else {
//             const newTitle = build.title;

//             data = data.map((task) => {
//               if (task.id === getIdToNum) {
//                 return {
//                   id: task.id,
//                   title: newTitle,
//                   description: task.description,
//                   dateIssued: task.dateIssued,
//                   dueDate: task.dueDate,
//                   priority: task.priority,
//                   completed: task.completed,
//                 };
//               }
//               return task;
//             });
//             status = 200;
//             response.message = "Successfully updated Task";
//             response.data = data;

//             res.write(JSON.stringify({ response, status }));
//             res.end();
//           }
//         }

//         //PUT
//         if (method === "PUT") {
//           const build = JSON.parse(container);
//           data.push(build);
//           const getId: any = url?.split("/")[1];
//           const getIdToNum = parseInt(getId);

//           const findData = data.findIndex((el) => {
//             return el.id === getIdToNum;
//           });

//           if (findData === -1) {
//             status = 404;
//             response.message = "Failed to update All Task";
//             response.data = data;

//             res.write(JSON.stringify({ response, status }));
//             res.end();
//           } else {
//             const newTitle = build.title;
//             const newDescription = build.description;
//             const newDateIssued = build.dateIssued;
//             const newDueDate = build.dueDate;
//             const newPriority = build.priority;
//             const newCompleted = build.completed;
//             data = data.map((task) => {
//               if (task.id === getIdToNum) {
//                 return {
//                   id: task.id,
//                   title: newTitle,
//                   description: newDescription,
//                   dateIssued: newDateIssued,
//                   dueDate: newDueDate,
//                   priority: newPriority,
//                   completed: newCompleted,
//                 };
//               }
//               return task;
//             });
//             status = 200;
//             response.message = "Successfully updated Task";
//             response.data = data;

//             res.write(JSON.stringify({ response, status }));
//             res.end();
//           }
//         }

//         //Delete
//         if (method === "DELETE") {
//           const getId: any = url?.split("/")[1];
//           const getIdToNum = parseInt(getId);

//           data = data.filter((task) => {
//             return task.id !== getIdToNum;
//           });

//           response.message = "Successfully deleted task";
//           response.data = data;
//           res.write(JSON.stringify({ response }));
//           res.end();
//         }
//       });
//   }
// );

// server.listen(port, () => {
//   console.log("Up and running");
// });

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
