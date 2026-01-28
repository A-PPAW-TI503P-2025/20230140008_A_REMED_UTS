const express = require('express');
const router = express.Router();
const borrowCtrl = require('../controllers/borrowController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth('user'), borrowCtrl.borrowBook); 

module.exports = router;