const express = require('express');
const app = express();

app.use(express.json());

const greeting = process.env.GREETING || 'Hello from your deployed app!';

app.get('/api/message', (req, res) => {
    res.json({ message: greeting });
});

app.post('/api/notes', (req, res) => {
    const { name, note } = req.body;

    if (!name || !note) {
        return res.status(400).json({
            error: 'Both name and note are required.'
        });
    }

    res.status(201).json({
        message: 'Note received!',
        data: {
            name: name,
            note: note
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
