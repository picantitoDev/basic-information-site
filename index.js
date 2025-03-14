import http from "http"

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      // redirtec to index
    } else if (req.url === "/about") {
      //about
    } else if (req.url === "/contact-me") {
      //redirect to contact
    } else {
      //redirect to 404
    }
  })
  .listen(8080)
