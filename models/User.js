const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class User extends Model {};

User.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userName:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userPass:
    {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
