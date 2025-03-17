const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"))
})

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "about.html"))
})

app.get("/contact-me", (req, res) => {
  res.sendFile(path.resolve(__dirname, "contact-me.html"))
})

app.all("*", (req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, "404.html"))
})

app.listen(3000, () => {
  console.log("Running on port 3000...")
})
