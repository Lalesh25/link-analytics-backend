const express = require('express');
const verifyToken = require('../middleware/auth');
const { nanoid } = require('nanoid');
const Link = require('../models/Link');
const router = express.Router();

router.post('/create', verifyToken, async (req, res) => {
    const { originalUrl, customAlias, expirationDate } = req.body;
    const shortCode = customAlias || nanoid(6);
  
    const newLink = new Link({
      userId: req.user.id,
      originalUrl,
      customAlias,
      expirationDate,
      shortCode,
    });
  
    await newLink.save();
    res.json(newLink);
  });
  
  router.get('/all', verifyToken, async (req, res) => {
    const links = await Link.find({ userId: req.user.id });
    res.json(links);
  });
  
module.exports = router;
