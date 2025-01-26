const { Router } = require("express");

const indexRouter = Router();

const controller = require("../controllers/IndexController");

indexRouter.get("/", controller.getAllMessages);

module.exports = { indexRouter };