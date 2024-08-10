const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/submit', (req, res) => {
    const { name, phone } = req.body;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (phoneRegex.test(phone)) {
        res.send(`Thank you, ${name}. Your phone number ${phone} is valid.`);
    } else {
        res.send(`Invalid phone number format. Please use ddd-ddd-dddd.`);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
