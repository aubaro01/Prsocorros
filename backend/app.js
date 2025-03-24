const express = require('express');
const userRoutes = require('./routes/UserRote');
const exerRoutes = require('./routes/ExerRote');
const userExercRoutes = require('./routes/UserExerRote');

const app = express();

app.use(express.json());

// Definindo rotas específicas para cada módulo
app.use('/api/users', userRoutes);
app.use('/api/exercises', exerRoutes);
app.use('/api/user-exercises', userExercRoutes);

// Rota simples de teste
app.get('/api/hello', (req, res) => {
  res.json({
      message: 'Hello from the backend!',
      status: 'success',
      timestamp: new Date().toISOString()
  });
});

// Removendo `app.listen()` porque a Vercel já gerencia isso
module.exports = app;
