const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Long live the Philippines",
        user: "Jorell",
        added: new Date()
    },
    {
        text: "I hate United",
        user: "Arne",
        added: new Date()
    }
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

module.exports = { indexRouter, messages };