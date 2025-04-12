const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

router.get('/:shortCode', async (req, res) => {
  const { shortCode } = req.params;
  const link = await Link.findOne({ shortCode });

  if (!link) return res.status(404).send('Link not found');

  // Expiration check
  if (link.expirationDate && new Date(link.expirationDate) < new Date()) {
    return res.status(410).send('Link expired');
  }

  // Async logging
  link.analytics.push({
    timestamp: new Date(),
    ip: req.ip,
    userAgent: req.get('User-Agent'),
  });

  link.clicks += 1;
  await link.save();

  res.redirect(link.originalUrl);
});

module.exports = router;
