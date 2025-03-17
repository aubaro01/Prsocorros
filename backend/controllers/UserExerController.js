const UserExerc = require('../models/ExUse'); 
const User = require('../models/user'); 
const Exercicio = require('../models/exerc'); 

const createUserExerc = async (req, res) => {
  try {
    const { id_User_fk, id_Exer_fk, exer_res } = req.body;

    const user = await User.findById(id_User_fk);
    const exercicio = await Exercicio.findById(id_Exer_fk);

    if (!user || !exercicio) {
      return res.status(404).json({ message: 'Utilizador ou exercício não encontrado.' });
    }

    const newUserExerc = new UserExerc({ id_User_fk, id_Exer_fk, exer_res });
    const savedUserExerc = await newUserExerc.save();

    res.status(201).json(savedUserExerc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllUserExercs = async (req, res) => {
  try {
    const userExercs = await UserExerc.find()
      .populate('id_User_fk') 
      .populate('id_Exer_fk'); 

    res.status(200).json(userExercs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUserExerc,
  getAllUserExercs,
};