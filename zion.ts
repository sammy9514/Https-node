import http, { IncomingMessage, ServerResponse } from "http";

const port: number = 4000;

interface iMessage {
  message: string;
  success: boolean;
  data: null | [] | {}[];
}

interface Iplay {
  name: string;
  song: string;
  artist: string;
  id: number;
  category: string;
  streams: number;
}
const Playlist: Iplay[] = [
  {
    id: 1,
    name: "My playlist1",
    song: "big 7",
    artist: "burna boy",
    category: "afro beat",
    streams: 5000,
  },
  {
    id: 2,
    name: "My playlist2",
    song: "sad",
    artist: "juice wrld",
    category: "Hiphop",
    streams: 8000,
  },
  {
    id: 3,
    name: "My playlist3",
    song: "element",
    artist: "pop smoke",
    category: "Hip hop",
    streams: 10000,
  },
];
const App = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    res.setHeader("Content-Type", "Application/Json");
    let statuscode = 404;
    let { method, url } = req;
    let response: iMessage = {
      message: "failed",
      success: false,
      data: null,
    };
    let Database: any = [];
    req
      .on("data", (chunk: any) => {
        Database.push(chunk);
      })
      .on("end", () => {
        if (method === "GET" && url === "/getallplaylist") {
          statuscode = 200;
          response.data = Playlist;
          response.message = "all data gotten";
          response.success = true;
          res.write(JSON.stringify({ statuscode, response }));
          res.end();
        } else {
          statuscode = 404;
        }

        //POST
        if (method === "POST" && url === "/createnewplaylist") {
          let body = JSON.parse(Database);
          Playlist.push(body);
          const check = Playlist.some((el) => {
            return el.song === body.song;
          });

          if (check === false) {
            statuscode = 200;
            response.data = Playlist;
            response.success = true;
            response.message = "playlist created successfully";
            res.write(JSON.stringify({ statuscode, response }));
            res.end();
          } else {
            statuscode = 404;
            response.data = null;
            response.success = false;
            response.message = "song already exist";
            res.write(JSON.stringify({ statuscode, response }));
            res.end();
          }
        }
        let check = JSON.parse(Database);
        Playlist.push(check);
        statuscode = 200;
        response.data = Playlist;
        response.success = true;
        response.message = "playlist created successfully";
        res.write(JSON.stringify({ statuscode, response }));
        res.end();

        //delete

        if (method === "DELETE") {
          let data: any = url?.split("/")[1];
          let datavalue = parseInt(data);

          let check: any = Playlist.filter((el: any) => {
            return el.id !== datavalue;
          });

          statuscode = 200;
          response.data = check;
          response.success = true;
          response.message = "playlist deleted successfully";
          res.write(JSON.stringify({ statuscode, response }));
          res.end();
        }
      });
  }
);
App.listen(port, () => {
  console.log("server is up and running using port", port);
});
