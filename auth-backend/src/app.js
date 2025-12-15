import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js' ;
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; // Assuming you have an orderRoutes.js file
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Database connection

console.log(process.env.MONGODB_URL);
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes); // Assuming you have an orderRoutes.js file

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});