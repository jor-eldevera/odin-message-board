const db = require("../db/queries");

async function getNewMessageForm(req, res) {
    res.render("form");
}

async function createNewMessage(req, res) {
    let username = req.body.username;
    let text = req.body.text;
    db.createNewMessage(username, text);

    res.redirect("/");
}

module.exports = {
    getNewMessageForm,
    createNewMessage
}