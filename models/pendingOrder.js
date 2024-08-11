const db = require('../database');

const getPendingOrders = (callback) => {
    db.all('SELECT * FROM pendingOrders ORDER BY sellerPrice ASC', [], (err, rows) => {
        if (err) {
            throw err;
        }
        callback(rows);
    });
};

const insertPendingOrder = (order, callback) => {
    const { buyerQty, buyerPrice, sellerQty, sellerPrice } = order;
    db.run('INSERT INTO pendingOrders (buyerQty, buyerPrice, sellerQty, sellerPrice) VALUES (?, ?, ?, ?)', 
        [buyerQty, buyerPrice, sellerQty, sellerPrice], function(err) {
            if (err) {
                throw err;
            }
            callback(this.lastID);
        });
};

const deletePendingOrder = (id, callback) => {
    db.run('DELETE FROM pendingOrders WHERE id = ?', [id], function(err) {
        if (err) {
            throw err;
        }
        callback(this.changes);
    });
};

module.exports = { getPendingOrders, insertPendingOrder, deletePendingOrder };
