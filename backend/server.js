require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: '5mb' })); // Increase the limit for JSON payload
app.use(express.urlencoded({ limit: '5mb', extended: true })); // Increase the limit for URL-encoded data

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Define storage for multer
const storage = multer.memoryStorage(); // Use memory storage for simplicity
const upload = multer({ storage: storage });

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Password stored in plain text (NOT RECOMMENDED)
  profilePicture: String, // URL or base64-encoded image for profile picture
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

// Profile Picture Upload Route
app.post('/api/user', upload.single('profilePicture'), async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Convert uploaded image buffer to base64 if present
    let profilePicture = null;
    if (req.file) {
      profilePicture = req.file.buffer.toString('base64');
    }

    const user = new User({ username, email, password, profilePicture });
    await user.save();
    res.status(201).json({ message: 'User information saved successfully!' });
  } catch (error) {
    console.error('Error saving user info:', error);
    res.status(500).json({ error: 'Failed to save user info' });
  }
});

// Fetch user info
app.get('/api/user', async (req, res) => {
  try {
    const user = await User.findOne();
    res.json(user);
  } catch (error) {
    console.error('Error fetching user info:', error);
    res.status(500).json({ error: 'Failed to fetch user info' });
  }
});

// Blog Schema
const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tagline: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  content: { type: String, required: true },
  username: { type: String, required: true }, // New field for storing username
  createdAt: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);


// Create Blog Route
// Create Blog Route
app.post('/CreateBlog', async (req, res) => {
  const { title, tagline, category, image, content, username } = req.body; // Include username

  try {
    const newBlog = new Blog({ title, tagline, category, image, content, username }); // Pass username to the model
    await newBlog.save();
    res.status(201).json({ message: 'Blog created successfully!' });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(400).json({ error: 'Error creating blog.' });
  }
});

// Fetch Blogs with Optional Category Filtering
app.get('/blogs', async (req, res) => {
  const { category } = req.query;

  try {
    const firstWord = category ? category.split(' ')[0] : null;
    const filter = firstWord ? { category: new RegExp(`^${firstWord}`, 'i') } : {};

    const blogs = await Blog.find(filter);
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Serve Frontend File
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'CodeEditor.js'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// Get Published Blogs by Username
app.get('/getPublishedBlogs', async (req, res) => {
  const { username } = req.query;

  try {
    const blogs = await Blog.find({ username }); // Find blogs by username
    res.json(blogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching blogs.' });
  }
});

