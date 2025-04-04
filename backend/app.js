const express = require('express');
const userRoutes = require('./routes/UserRote');
const exerRoutes = require('./routes/ExerRote');
const userExercRoutes = require('./routes/UserExerRote');

const app = express();
require('./Config/db');

app.use(express.json());


app.get('/', (req, res) => {
  res.json({
    message: 'Hello from the backend!',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});

module.exports = app;
