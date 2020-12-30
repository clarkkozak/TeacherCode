const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const api = require("./routes/api.js")

const port = 3000

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use("/api", api)

app.listen(port, function() {
    console.log("Server working on port " + port)
})
