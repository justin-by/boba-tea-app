'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    drinkId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Drink, {foreignKey: 'drinkId'})
  };
  return Review;
};
