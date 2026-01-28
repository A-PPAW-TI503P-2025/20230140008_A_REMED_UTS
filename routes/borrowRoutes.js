const express = require('express');
const router = express.Router();
const borrowCtrl = require('../controllers/borrowController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth('user'), borrowCtrl.borrowBook); // User mode [cite: 66]

module.exports = router;