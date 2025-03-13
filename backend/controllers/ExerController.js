const express = require('express');
const router = express.Router();

const exerController = require('../controllers/ExerController');

router.get('/', exerController.index);
router.put('/update/:id', exerController.update);

module.exports = router;