import http from "http"
import fs from "fs"

const server = http
  .createServer((req, res) => {
    let myReadStream = ""
    if (req.url === "/") {
      myReadStream = fs.createReadStream("index.html")
    } else if (req.url === "/about") {
      myReadStream = fs.createReadStream("about.html")
    } else if (req.url === "/contact-me") {
      myReadStream = fs.createReadStream("contact-me.html")
    } else {
      myReadStream = fs.createReadStream("404.html")
    }

    myReadStream.on("error", () => {
      res.writeHead(404, { "Content-Type": "text/html" })
      fs.createReadStream("404.html").pipe(res)
    })

    res.writeHead(200, { "Content-Type": "text/html" })
    myReadStream.pipe(res)
  })
  .listen(8080)
