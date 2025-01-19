const express = require("express");
const app = express();

const PORT = 8080;

const indexRouter = require("./routes/IndexRouter");
const messageRouter = require("./routes/MessageRouter");

app.listen(PORT);