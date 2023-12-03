const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const dataRouter = require('./routes/data');
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000', 
  methods: 'GET,PUT,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}));

mongoose.connect('mongodb://127.0.0.1:27017/RFID', { 
    // useNewUrlParser: true, useUnifiedTopology: true 
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/api', authRoutes);
app.use('/api', dataRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
