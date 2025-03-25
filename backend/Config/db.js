const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro ao conectar ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB com sucesso!');
});

module.exports = mongoose;
