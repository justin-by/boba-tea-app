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
          name: "Milk Tea",
          imageUrl:
            "https://image.freepik.com/free-photo/bubble-tea-also-known-as-pearl-milk-tea-bubble-milk-tea-boba-tea-with-bubbles_1339-99421.jpg",
          description: "Organic black tea with milk and hand grafted sugar",
        },
        {
          userId: 1,
          name: "Matcha Milk Tea",
          imageUrl:
            "https://image.freepik.com/free-photo/green-tea-latte-with-bubble_1339-99943.jpg",
          description:
            "Matcha milk tea is a refreshing beverage that is composed of matcha powder.",
        },
        {
          userId: 2,
          name: "Thai Iced Tea",
          imageUrl:
            "https://image.freepik.com/free-photo/traditional-iced-milk-tea-red-tea-powder_1150-26447.jpg",
          description:
            "This tea beverage is most commonly made from tea mix​, milk, and sugar.",
        },
        {
          userId: 2,
          name: "Mango Milk Tea",
          imageUrl:
            "https://cdn.shopify.com/s/files/1/2567/0132/products/MangoMilkTea3_2_2048x.jpg?v=1597747714",
          description:
            "Creamy and fruity in flavour, this vibrant milk tea will quench your thirst!.",
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
