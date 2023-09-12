import http, { ServerResponse, IncomingMessage } from "http";
import fs from "fs";
import path from "path";
import { log } from "console";
const port: number = 9060;

// // const server = http.createServer(
// //   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
// //     res.writeHead(200);
// //     res.write(
// //       `You are running on ${port} server which means you have successfully HACKED NASA`
// //     );
// //     res.end();
// //   }
// // );
// // server.listen(port, () => {
// //   console.log("Hello world");
// // });

// const port: number = 2929;

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200);
//     res.write(" hello world");
//     res.end();
//   }
// );

// server.listen(port, () => {
//   console.log("it worked");
// });
