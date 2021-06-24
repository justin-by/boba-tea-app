'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    drinkId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1, 5]
      }
    },
    imageUrl: {
      type: DataTypes.STRING(200),
    },
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Drink, {foreignKey: 'drinkId'})
  };
  return Review;
};
