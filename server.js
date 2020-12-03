const express = require("express");
const app = express();

const path = require("path");
const fs  = require("fs");

app.use("/dist/", express.static(__dirname + "/dist/"));
app.get("/", (request, response) => response.sendFile(path.join(__dirname + "/dist/index.html")));

process.on("exit", shutdown);
process.on("SIGINT", shutdown);

function shutdown() {
  process.exit();
}

app.listen(3001);
