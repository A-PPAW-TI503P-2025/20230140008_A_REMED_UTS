const { Book, BorrowLog } = require('../models');

exports.borrowBook = async (req, res) => {
    try {
        const { bookId, latitude, longitude } = req.body; // Body Payload [cite: 69, 72, 73, 74]
        const userId = req.headers['x-user-id']; // Simulasi User ID [cite: 66, 80]

        const book = await Book.findByPk(bookId);
        
        // Cek ketersediaan buku dan stok 
        if (!book || book.stock <= 0) {
            return res.status(400).json({ message: "Buku tidak tersedia atau stok habis." });
        }

        // Logic: Kurangi stok buku 
        await book.decrement('stock');

        // Logic: Catat transaksi dan lokasi 
        const log = await BorrowLog.create({
            userId, bookId, latitude, longitude
        });

        res.status(201).json({ message: "Peminjaman berhasil dicatat!", data: log });
    } catch (error) {
        res.status(500).json({ error: error.message }); // Penanganan Error [cite: 36]
    }
};