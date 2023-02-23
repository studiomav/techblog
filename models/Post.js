const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {};

Post.init(
  {
    id:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    postTitle:
    {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postText:
    {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
