const User = require('../models/user'); 

const createUser = async (req, res) => {
  try {
    const { home, circuito, Pass } = req.body;

    const newUser = new User({ home, circuito, Pass });
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};