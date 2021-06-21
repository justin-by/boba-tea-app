"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      "Drinks",
      [
        {
          userId: 1,
          storeId: 1,
          name: "Milk Tea",
          description: "The Best Tea",
        },
        {
          userId: 1,
          storeId: 2,
          name: "Orange Tea",
          description: "The 2nd Best Tea",
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
    return queryInterface.bulkDelete("Drinks", null, {});
  },
};
