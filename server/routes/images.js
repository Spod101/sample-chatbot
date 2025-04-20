const express = require('express');
const router = express.Router();
const generateImage = require('../services/generateImageService');

router.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    const imageUrl = await generateImage(prompt);
    res.json({ imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Image generation failed.' });
  }
});

module.exports = router;
