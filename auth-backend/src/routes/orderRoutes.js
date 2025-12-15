import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import Order from '../models/Order.js';

const router = express.Router();    


router.post('/', verifyToken, async (req, res) => {
  const userId = req.user.id;
  const {items, total, paymentMethod } = req.body;
  console.log('Received order data:', req.body);

  try {
    const newOrder = new Order({
      userId,
      items,
      total,
      paymentMethod,
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order saved successfully' });
  } catch (err) {
    console.error('Error saving order:', err);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Get all orders for logged-in user
router.get('/my-orders', verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

export default router;
