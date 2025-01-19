const express = require("express");
const app = express();

const PORT = 8080;

const indexRouter = require("./routes/IndexRouter");
const messageRouter = require("./routes/MessageRouter");

const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(PORT);