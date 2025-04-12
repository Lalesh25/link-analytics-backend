const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'intern@dacoid.com' && password === 'Test123') {
    const token = jwt.sign({ id: '1', email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token });
  }

  res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
