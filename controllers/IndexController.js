const db = require("../db/queries");

async function getAllMessages(req, res) {
    let messages = await db.getAllMessages();
    res.render("index", { messages: messages });
}

module.exports = {
    getAllMessages
}