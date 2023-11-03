'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart_Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type:DataTypes.DECIMAL,
      allowNull: false
    },
    quantity: {
      type:DataTypes.SMALLINT,
      allowNull: false
  }, 
    sequelize,
    modelName: 'Cart_Item',
    tableName: 'cart_items'
  });
  return Cart_Item;
};