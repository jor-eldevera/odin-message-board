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

module.exports = indexRouter;