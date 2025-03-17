const express = require('express');
const router = express.Router();
const { createExercicio, getAllExercicios } = require('../controllers/ExerController');

router.post('/exer', createExercicio);

router.get('/exer', getAllExercicios);

module.exports = router;