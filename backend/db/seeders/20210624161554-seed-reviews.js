"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Reviews",
      [
        {
          userId: 1,
          drinkId: 1,
          comment: "This was a tasty drink.",
          rating: 4,
        },
        {
          userId: 1,
          drinkId: 1,
          comment: "This was pretty ok.",
          rating: 3,
        },
        {
          userId: 1,
          drinkId: 1,
          comment: "Not my favorite.",
          rating: 2,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};
