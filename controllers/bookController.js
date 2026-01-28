const { Book } = require('../models');

exports.getAllBooks = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
};

exports.getBookById = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    res.json(book);
};

exports.createBook = async (req, res) => {
    const { title, author, stock } = req.body;
    if (!title || !author) return res.status(400).json({ message: "Title dan Author wajib diisi" });
    const book = await Book.create({ title, author, stock });
    res.status(201).json(book);
};

exports.updateBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    await book.update(req.body);
    res.json({ message: "Buku diperbarui", data: book });
};

exports.deleteBook = async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) return res.status(404).json({ message: "Buku tidak ditemukan" });
    await book.destroy();
    res.json({ message: "Buku dihapus" });
};