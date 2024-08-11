const db = require('../database');

const getCompletedOrders = (callback) => {
    db.all('SELECT * FROM completedOrders ORDER BY price ASC', [], (err, rows) => {
        if (err) {
            throw err;
        }
        callback(rows);
    });
};

const insertCompletedOrder = (order, callback) => {
    const { price, qty } = order;
    db.run('INSERT INTO completedOrders (price, qty) VALUES (?, ?)', [price, qty], function(err) {
        if (err) {
            throw err;
        }
        callback(this.lastID);
    });
};

module.exports = { getCompletedOrders, insertCompletedOrder };
