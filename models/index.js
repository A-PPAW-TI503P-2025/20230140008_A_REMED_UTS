const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false }, // Validasi: tidak boleh kosong [cite: 83]
    author: { type: DataTypes.STRING, allowNull: false }, // Validasi: tidak boleh kosong [cite: 83]
    stock: { type: DataTypes.INTEGER, defaultValue: 0 }
});

const BorrowLog = sequelize.define('BorrowLog', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER, allowNull: false }, // Disimulasikan dari header [cite: 80]
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    borrowDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    latitude: { type: DataTypes.FLOAT, allowNull: false }, // Geolocation [cite: 57, 77]
    longitude: { type: DataTypes.FLOAT, allowNull: false } // Geolocation [cite: 57, 77]
});

module.exports = { Book, BorrowLog, sequelize };