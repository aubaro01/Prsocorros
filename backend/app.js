
const express = require('express');
const userRoutes = require('./routes/UserRote');
const exerRoutes = require('./routes/ExerRote');
const userExercRoutes = require('./routes/UserExerRote');

const app = express();

app.use(express.json());

app.use('/api/', userRoutes);
app.use('/api', exerRoutes);
app.use('/api', userExercRoutes);

// Rota simples de teste
app.get('/api/hello', (req, res) => {
  res.json({
      message: 'Hello from the backend!',
      status: 'success',
      timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

