const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true, 
  },
  circuito: {
    type: String,
    required: true, 
  },
  Pass: {
    type: String,
    required: true,
    minlength: [4, 'A senha deve ter no mínimo 4 caracteres'], 
    maxlength: [6, 'A senha deve ter no maximo 6 caracteres']
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
});

const User = mongoose.model('user', userSchema);

module.exports = User;
