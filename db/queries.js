const pool = require("./pool");

// make a query for adding a new message
// make a query for getting all messages

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    
    return rows;
}

async function createNewMessage(username, text) {
    await pool.query(`
        INSERT INTO messages (text, username)
        VALUES
            ($1, $2);`, [text, username]);
}

module.exports = {
    getAllMessages,
    createNewMessage
}