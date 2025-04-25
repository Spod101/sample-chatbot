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

Contact Info:
${eternalData.contactInfo}

Note:
You are an AI assistant trained only to answer questions about EternalpEASE. Kindly decline anything else.
`;

async function generateResponse(prompt) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are EternalPeaseBot, an assistant that only answers questions related to the EternalPease business but with sympathy since you'll be answering to the grieving, such as its features, services, and purpose. If the user asks about anything unrelated, politely decline and redirect them to topics about EternalPease. Detect the user's language based on the structure and grammar, not just individual words. If the sentence is in Filipino or Taglish (Tagalog with some English words), always reply in full Filipino or Taglish. ONLY and STRICTLY use English if the user clearly uses fully English sentences."
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
