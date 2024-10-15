require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Password stored in plain text (NOT RECOMMENDED)
});

const User = mongoose.model('User', userSchema);

// Sign Up Route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({ name, email, password }); // Store password as plain text
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'User already exists.' });
    } else {
      res.status(400).json({ error: 'Error creating user.' });
    }
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  try {
    const user = await User.findOne({ name });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    // Compare plain text password directly
    if (password !== user.password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful!', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'CodeEditor.js'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
  
  
  