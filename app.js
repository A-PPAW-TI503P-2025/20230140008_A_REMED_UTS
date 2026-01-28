const express = require('express');
const { sequelize, Book } = require('./models');
const auth = require('./middleware/auth');
const borrowCtrl = require('./controllers/borrowController');

const app = express();
app.use(express.json());

// --- ENDPOINTS ---

// Public Mode [cite: 59]
app.get('/api/books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

app.get('/api/books/:id', async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    res.json(book);
});

// Admin Mode (Header x-user-role: admin) [cite: 62]
app.post('/api/books', auth('admin'), async (req, res) => {
    const { title, author, stock } = req.body;
    if (!title || !author) return res.status(400).json({ message: "Validasi Gagal: Title & Author wajib diisi" }); // [cite: 83]
    const book = await Book.create({ title, author, stock });
    res.status(201).json(book);
});

// User Mode (Header x-user-role: user) [cite: 66]
app.post('/api/borrow', auth('user'), borrowCtrl.borrowBook);

// Sinkronisasi Database [cite: 41]
sequelize.sync().then(() => {
    console.log('Database terhubung!');
    app.listen(3000, () => console.log('Server berjalan di port 3000'));
});