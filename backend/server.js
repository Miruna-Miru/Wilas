require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

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
    const newUser = new User({ name, email, password });
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

    if (password !== user.password) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful!', success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Serve Frontend File
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'CodeEditor.js'));
});

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

// Create Blog Route
app.post('/CreateBlog', async (req, res) => {
  const { title, tagline, category, image, content } = req.body;

  try {
    const newBlog = new Blog({ title, tagline, category, image, content });
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error creating blog.' });
  }
});

// Fetch Blogs with Optional Category Filtering
app.get('/blogs', async (req, res) => {
  const { category } = req.query;

  try {
    // Extract the first word of the category for filtering
    const firstWord = category ? category.split(' ')[0] : null;
    const filter = firstWord ? { category: new RegExp(`^${firstWord}`, 'i') } : {};

    const blogs = await Blog.find(filter);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
