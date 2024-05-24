// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const dbURI = 'mongodb://mongodb-service:27017/CourseMap';

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
    family: 4 })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

// Define User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String
});

// Define User model
const User = mongoose.model('User', UserSchema);

// Signup endpoint
app.post('/signup', async (req, res) => {
  try {
    const { username, password, name } = req.body;
    // Create a new user
    const user = new User({
      username,
      password,
      name
    });
    // Save the user to the database
    await user.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send('User not found');
    }
    // Compare passwords
    if (user.password !== password) {
      return res.status(401).send('Incorrect password');
    }
    res.status(200).send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

// Start the server
const PORT = process.env.PORT || 3898;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
