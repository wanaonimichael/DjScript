const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// OpenAI API Key (Replace with your actual API key)
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY';

// Endpoint to handle AI assistant requests
app.post('/ask', async (req, res) => {
    const question = req.body.question;
    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: question,
            max_tokens: 150,
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        res.json({
            answer: response.data.choices[0].text.trim()
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while processing your request.');
    }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});