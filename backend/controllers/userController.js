const User = require('../models/user');

// Função para criar um novo usuário
const createUser = async (req, res) => {
  try {
    const { nome, circuito, Pass } = req.body;

    if (!nome || !circuito || !Pass) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    const newUser = new User({
      nome,
      circuito,
      Pass, 
    });

    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o usuário.', error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao obter usuários.', error: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
