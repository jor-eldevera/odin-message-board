const pool = require("./pool");

// make a query for adding a new message
// make a query for getting all messages

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    console.log(rows);
    
    return rows;
}

module.exports = {
    getAllMessages
}