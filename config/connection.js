const Sequelize = require('sequelize');
require('dotenv').config();

const DB_PORT = process.env.DB_PORT || 3306,
sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
    { 
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: DB_PORT,
        define:
        {
            timestamps: 'false'
        }
    });

module.exports = sequelize;