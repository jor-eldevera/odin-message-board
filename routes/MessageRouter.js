const { Router } = require("express");
const { messages } = require("./IndexRouter");

const messageRouter = Router();

const controller = require("../controllers/MessageController");

messageRouter.get("/", controller.getNewMessageForm);
messageRouter.post("/", controller.createNewMessage);

module.exports = messageRouter;