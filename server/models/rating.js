'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({Product}) {
      Rating.belongsTo(Product, {
        foreignKey: "rating_id",
        as: "rating"
      })
    }
  }
  Rating.init({
    rating_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      autoIncrement:true,
      primaryKey:true
    },
    user: {
      type: DataTypes.TEXT,
      allowNull:false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull:false
    },
    rating_num: {
      type :DataTypes.SMALLINT,
      allowNull:false
    },
    published: {
      type: DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Rating',
    tableName: 'ratings'
  });
  return Rating;
};