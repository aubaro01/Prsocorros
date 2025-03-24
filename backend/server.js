const express = require('express');
const app = require('app');

const app = express();

app.get('/', (req, res) => {
    res.send('Meu backend na Vercel!');
});

module.exports = app;
