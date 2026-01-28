const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/bookController');
const auth = require('../middleware/authMiddleware');

router.get('/', bookCtrl.getAllBooks);
router.get('/:id', bookCtrl.getBookById);
router.post('/', auth('admin'), bookCtrl.createBook); 
router.put('/:id', auth('admin'), bookCtrl.updateBook);
router.delete('/:id', auth('admin'), bookCtrl.deleteBook);

module.exports = router;