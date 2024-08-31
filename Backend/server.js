const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const User = require('./models/User');

const app = express();
const PORT = process.env.PORT || 5000;

// Your MongoDB Atlas connection string
const uri = 'mongodb+srv://admin:admin%40123@job-portal.z5xb2.mongodb.net/user?retryWrites=true&w=majority';
const JWT_SECRET = 'your_jwt_secret'; 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register endpoint
app.post('/register', async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = req.body;

    // Validate input
    if (!username || !password || !email || !firstName || !lastName) {
      return res.status(400).send('All fields are required');
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send('Username already taken');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save the new user
    const newUser = new User({
      username,
      password: hashedPassword, // Store the hashed password
      email,
      firstName,
      lastName,
    });

    await newUser.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });

  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
