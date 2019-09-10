'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
      product_name: 'Bananas',
      department_name: 'Grocery',
      price: 1.5,
      stock_quantity: 50
    },
  {
    product_name: 'Socks',
      department_name: 'Clothes',
      price: 4.5,
      stock_quantity: 50
  },
{
  product_name: 'NyQuil',
      department_name: 'Pharma',
      price: 6.5,
      stock_quantity: 50
},
{
  product_name: 'Lamp',
      department_name: 'House',
      price: 10,
      stock_quantity: 50
},
{
  product_name: 'Bicycle',
      department_name: 'Toys',
      price: 50,
      stock_quantity: 50
},
{
  product_name: 'Pillow',
      department_name: 'House',
      price: 30,
      stock_quantity: 50
},
{
  product_name: 'Jeans',
      department_name: 'Clothes',
      price: 45,
      stock_quantity: 50
},
{
  product_name: 'Frozen DVD',
      department_name: 'Entertainment',
      price: 10,
      stock_quantity: 50
},
{
  product_name: 'Gum',
      department_name: 'Grocery',
      price: 1.5,
      stock_quantity: 50
},
{
  product_name: 'Blanket',
      department_name: 'House',
      price: 22,
      stock_quantity: 50
}]
)
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkDelete('Products', null, {});

  }
};
