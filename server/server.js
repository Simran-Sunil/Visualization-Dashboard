const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB connection string)
mongoose.connect('your_database_url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define routes here later

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));