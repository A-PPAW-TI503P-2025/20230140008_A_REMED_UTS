const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_db', 'root', '', {
    host: '127.0.0.1', 
    dialect: 'mysql',
    logging: false
});

module.exports = sequelize;