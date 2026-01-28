const express = require('express');
const { sequelize } = require('./models');
const auth = require('./middleware/auth');
const bookCtrl = require('./controllers/bookController');
const borrowCtrl = require('./controllers/borrowController');

const app = express();
app.use(express.json());

app.get('/api/books', bookCtrl.getAllBooks);
app.get('/api/books/:id', bookCtrl.getBookById);

app.post('/api/books', auth('admin'), bookCtrl.createBook);
app.put('/api/books/:id', auth('admin'), bookCtrl.updateBook);
app.delete('/api/books/:id', auth('admin'), bookCtrl.deleteBook);

app.post('/api/borrow', auth('user'), borrowCtrl.borrowBook);

sequelize.sync().then(() => {
    console.log('Database terhubung!');
    app.listen(3000, () => console.log('Server berjalan di port 3000'));
}).catch(err => console.log('Gagal konek database: ' + err));