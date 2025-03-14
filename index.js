import http from "http"

const server = http
  .createServer((req, res) => {
    res.statusCode = 200
    res.end("Hello world")
  })
  .listen(3000)
