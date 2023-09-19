import http, { IncomingMessage, ServerResponse } from "http";
import os from "os";

const port = 2001;

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     req.statusCode = 200;
//     const data = req.rawHeaders
//       .splice(7, 2)
//       .toString()
//       .split(",")[2]
//       .split(";")[0];

//     res.setHeader("Content-Type", "text/html");
//     console.log(data);
//     res.write(
//       `<html>
//       <body>
//       <p>Your server is running on ${data} browser.</p>
//       <p>And here are some little information about your laptop <br>Memory:${Math.floor(
//         os.totalmem() / 1000000000
//       )}gb of RAM <br> Arch:${os.arch} <br> Processor:${
//         os.cpus()[1].model
//       }<br> Processor Speed: ${os.cpus()[1].speed} <br> ${os.version()}</p>
//       </body>
//       </html`
//     );

//     res.end();
//   }
// );
// server.listen(port, () => {
//   console.log("run", port);
// });


const server = http.createServer((req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
  req.statusCode = 200

  res.
})