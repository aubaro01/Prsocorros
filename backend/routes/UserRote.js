const express = require('express');
const router = express.Router(); 
const { createUser, getAllUsers } = require('../controllers/userController'); 


router.post('/create', createUser);

router.get('/user', getAllUsers);

module.exports = router; 
