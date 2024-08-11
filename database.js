const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    // Create tables if they don't exist
    db.run(`CREATE TABLE IF NOT EXISTS pendingOrders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        buyerQty INTEGER,
        buyerPrice REAL,
        sellerQty INTEGER,
        sellerPrice REAL
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS completedOrders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        price REAL,
        qty INTEGER
    )`);
});

module.exports = db;
