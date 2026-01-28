const { Book, BorrowLog } = require('../models');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body;
        const userId = req.headers['x-user-id'];

        if (!userId) return res.status(400).json({ message: "Header x-user-id wajib diisi" });

        const book = await Book.findByPk(bookId);
        if (!book || book.stock <= 0) {
            return res.status(400).json({ message: "Buku tidak tersedia atau stok habis" });
        }

        await book.decrement('stock');
        const log = await BorrowLog.create({ userId, bookId, latitude, longitude });

        res.status(201).json({ message: "Buku berhasil dipinjam", data: log });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};