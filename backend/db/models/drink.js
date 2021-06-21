'use strict';
module.exports = (sequelize, DataTypes) => {
  const Drink = sequelize.define('Drink', {
    userId: DataTypes.INTEGER,
    storeId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
 Drink.associate = function(models) {
    // associations can be defined here
    Drink.belongsTo(models.User, {foreignKey: 'userId'})
    Drink.hasMany(models.Review, {foreignKey: 'drinkId'})
    Drink.belongsTo(models.Store, {foreignKey: 'storeId'})

  };
  return Drink;
};
