const { Router } = require("express");
const { messages } = require("./IndexRouter");

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
    res.render("form");
});

messageRouter.post("/", (req, res) => {
    let name = req.body.name;
    let message = req.body.message;

    messages.push({
        text: message,
        user: name,
        added: new Date()
    });

    res.redirect("/");
});

module.exports = messageRouter;