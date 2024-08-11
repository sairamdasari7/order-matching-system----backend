const express = require('express');
const router = express.Router();
const pendingOrderModel = require('../models/pendingOrder');
const completedOrderModel = require('../models/completedOrder');

router.get('/pending_orders', (req, res) => {
    pendingOrderModel.getPendingOrders((orders) => {
        res.json(orders);
    });
});

router.get('/completed_orders', (req, res) => {
    completedOrderModel.getCompletedOrders((orders) => {
        res.json(orders);
    });
});

router.post('/place_order', (req, res) => {
    const { buyerQty, buyerPrice, sellerQty, sellerPrice } = req.body;

    // Insert new order into the pending orders table
    pendingOrderModel.insertPendingOrder({ buyerQty, buyerPrice, sellerQty, sellerPrice }, (newOrderId) => {
        // Process matching logic here (this would ideally be more complex)
        // For simplicity, we're assuming any price match moves the order to completedOrders
        pendingOrderModel.getPendingOrders((orders) => {
            orders.forEach((order) => {
                if (order.buyerPrice === sellerPrice && order.sellerPrice === buyerPrice) {
                    const qty = Math.min(order.buyerQty, order.sellerQty);
                    completedOrderModel.insertCompletedOrder({ price: buyerPrice, qty }, () => {
                        pendingOrderModel.deletePendingOrder(order.id, () => {});
                    });
                }
            });
        });

        res.status(201).json({ message: 'Order placed successfully' });
    });
});

module.exports = router;
