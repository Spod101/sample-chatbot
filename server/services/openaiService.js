const { OpenAI } = require('openai');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Load EternalPease business data from JSON file
const dataPath = path.join(__dirname, '..', 'eternalpease_data.json');
const eternalData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Convert JSON into a readable context
const eternalPeaseContext = `
Business Info:
${eternalData.businessInfo}

Services:
${eternalData.services.map(service => `- ${service}`).join('\n')}

FAQs:
${eternalData.faqs.map(faq => `Q: ${faq.question}\n${faq.answer}`).join('\n\n')}

Note:
You are an AI assistant trained only to answer questions about EternalpEASE. Kindly decline anything else.
`;

async function generateResponse(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are EternalPeaseBot, an assistant that only answers questions related to the EternalPease business, such as its features, services, and purpose. If the user asks about anything unrelated, politely decline and redirect them to topics about EternalPease."
      },
      {
        role: "user",
        content: `Context:\n${eternalPeaseContext}\n\nUser Question:\n${prompt}`
      }
    ]
  });

  return completion.choices[0].message.content;
}

module.exports = generateResponse;
