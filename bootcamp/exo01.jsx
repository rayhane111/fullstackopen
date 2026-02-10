
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let users = [];
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }

    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);

    res.status(201).json(newUser);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
