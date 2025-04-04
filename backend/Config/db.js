require('dotenv').config();  
const mongoose = require('mongoose');

const dbUri = process.env.db_url;

if (!dbUri) {
  console.error('Erro: DB_HOST não encontrado no arquivo .env');
  process.exit(1);  
}
mongoose.connect(dbUri, {
  connectTimeoutMS: 15000,  
  socketTimeoutMS: 15000,   
})
.then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
})
.catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err);  
});
