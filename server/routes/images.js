const express = require("express");
const router = express.Router();
const { generateFuneralThemeImage } = require("../services/openaiService");
const { uploadImageFromUrl } = require("../services/supabaseService");

router.post("/generate-image", async (req, res) => {
  const { prompt } = req.body;

  try {
    const imageUrl = await generateFuneralThemeImage(prompt);
    const savedUrl = await uploadImageFromUrl(imageUrl, prompt);

    res.json({ success: true, url: savedUrl });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
