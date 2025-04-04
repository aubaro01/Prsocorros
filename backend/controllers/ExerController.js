const Exercicio = require('../models/exerc'); 

const createExercicio = async (req, res) => {
  try {
    const { exerc_nome } = req.body;

    const existingExercicio = await Exercicio.findOne({ exerc_nome });
    if (existingExercicio) {
      return res.status(400).json({ message: 'Já existe um exercício com este nome.' });
    }

    const newExercicio = new Exercicio({ exerc_nome });
    const savedExercicio = await newExercicio.save();

    res.status(201).json(savedExercicio);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllExercicios = async (req, res) => {
  try {
    const exercicios = await Exercicio.find(); 
    res.status(200).json(exercicios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createExercicio,
  getAllExercicios,
};