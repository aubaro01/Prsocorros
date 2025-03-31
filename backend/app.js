const express = require('express');
const userRoutes = require('./routes/UserRote');
const exerRoutes = require('./routes/ExerRote');
const userExercRoutes = require('./routes/UserExerRote');

const app = express();

app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/exercises', exerRoutes);
app.use('/api/user-exercises', userExercRoutes);


app.get('/api/hello', (req, res) => {
  res.json({
      message: 'Hello from the backend!',
      status: 'success',
      timestamp: new Date().toISOString()
  });
});

module.exports = app;
