// import "dotenv/config"
// import http from "http"
// import fs from "fs"

// const server = http
//   .createServer((req, res) => {
//     let myReadStream = ""
//     if (req.url === "/") {
//       myReadStream = fs.createReadStream("index.html")
//     } else if (req.url === "/about") {
//       myReadStream = fs.createReadStream("about.html")
//     } else if (req.url === "/contact-me") {
//       myReadStream = fs.createReadStream("contact-me.html")
//     } else {
//       myReadStream = fs.createReadStream("404.html")
//     }

//     myReadStream.on("error", () => {
//       res.writeHead(404, { "Content-Type": "text/html" })
//       fs.createReadStream("404.html").pipe(res)
//     })

//     res.writeHead(200, { "Content-Type": "text/html" })
//     myReadStream.pipe(res)
//   })
//   .listen(8080)

import express from "express"
import path from "path"
import { fileURLToPath } from "url"

// ES Module workaround for __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Routes
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")))
app.get("/about", (req, res) =>
  res.sendFile(path.join(__dirname, "about.html"))
)
app.get("/contact-me", (req, res) =>
  res.sendFile(path.join(__dirname, "contact-me.html"))
)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"))
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`My First Express App - listening on port: ${PORT}`)
})
