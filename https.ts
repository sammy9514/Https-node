import http, { ServerResponse, IncomingMessage } from "http";
import fs from "fs";
import path from "path";
import { log } from "console";
const port: number = 9060;

const createServer = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.writeHead(200);

    let connect: string = "site/";

    switch (req.url) {
      case "/":
        connect += "home.html";
        res.statusCode = 200;
        break;
      case "/about":
        connect += "about.html";
        res.statusCode = 200;
        break;
      case "contact/":
        connect += "contact.html";
        res.statusCode = 200;
        break;
      default:
        connect += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path.join(__dirname, connect), (err, data) => {
      if (err) {
        console.log("An error occured", err);
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  }
);

createServer.listen(port, () => {
  console.log("server is listening oto port on", port);
});
