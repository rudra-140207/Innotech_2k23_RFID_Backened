const express = require('express');
const router = express.Router();
const User = require('../models/users');

const jwt = require('jsonwebtoken');
require("dotenv").config();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).send('User not found');

    
    if (password != user.password) return res.status(400).send('Invalid password');

    const token = jwt.sign({ _id: user._id }, process.env.SECRET);
    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
