// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { authController } from './controllers/authController';
import { authMiddleware } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/your-db-name')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/api/auth/signup', authController.signup);
app.post('/api/auth/login', authController.login);

// Protected route example
app.get('/api/user/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});