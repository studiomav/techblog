const Sequelize = require('sequelize');
require('dotenv').config();

sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306,
        define:
        {
            timestamps: 'false'
        }
    });

module.exports = sequelize;