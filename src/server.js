const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB with username/password
mongoose.connect('mongodb://admin:password123@mongo:27017/testdb?authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
  res.send('Hello from Node.js with secure MongoDB!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
