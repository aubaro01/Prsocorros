const express = require('express');
const router = express.Router();
const { createUserExerc, getAllUserExercs } = require('../controllers/UserExercController');

router.post('/UserExerc', createUserExerc);

router.get('/UserExerc', getAllUserExercs);

module.exports = router;