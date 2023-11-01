'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({Rating,}) {
      
      Product.hasMany(Rating, {
        foreignKey: "rating_id",
        as: "rating",
      })
  }}
  Product.init({
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products'
  });
  return Product;
};