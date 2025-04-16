const express = require('express');
const router = express.Router();
const supabase = require('../services/supabaseService');
const generateResponse = require('../services/openaiService');

router.post('/', async (req, res) => {
  const { user_input } = req.body;

  try {
    const ai_response = await generateResponse(user_input);

    const { data, error } = await supabase
      .from('messages')
      .insert([{ user_input, ai_response }])
      .select();

    if (error) throw error;

    res.status(200).json(data[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
