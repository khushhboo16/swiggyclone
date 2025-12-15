import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
  console.log('Registering user:', req.body);
  try {
    const userExist = await User.findOne({email: req.body.email});
    if (userExist) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const { name, email, password } = req.body;

    // Create a new user
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' } );
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      // Handle duplicate email error
      return res.status(400).json({ message: 'Email already exists' });
    }
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token  , user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }  };