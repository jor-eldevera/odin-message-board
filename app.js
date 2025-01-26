require("dotenv").config();
const express = require("express");
const app = express();

const PORT = 8080;

// Routers
const { indexRouter, messages } = require("./routes/IndexRouter");
const messageRouter = require("./routes/MessageRouter");

// hooking up ejs
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middleware to parse new message form data
app.use(express.urlencoded({ extended: true }));

// hooking up routers
app.use("/", indexRouter);
app.use("/new", messageRouter);

app.listen(PORT);