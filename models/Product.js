const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.FLOAT, allowNull: false },
    description: { type: DataTypes.TEXT },
    category: { type: DataTypes.STRING },
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
});

module.exports = Product;
