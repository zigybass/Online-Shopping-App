# bamazon

# MySQL and Sequelize

## Overview

In this activity, you'll be creating an Amazon-like storefront with the MySQL and Sequelize skills you learned this unit. The web app will take in orders from customers and deplete stock from the store's inventory. As a challenge task, you can program your site to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

Make sure you save and require all of your NPM packages in your homework files--your app will need them for data input and storage.

## Submission Guide

Be sure to utilize the [Sequelize Heroku Deployment Guide](../../student-resources/Guides/SequelizeHerokuDeploymentProcess.md) in order to deploy your assignment.

Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

## Instructions

### Challenge #1: Customer View (Recommended)

1. Create your project directory structure. This should be similar to what we've been doing in class thus far, and look like the below:

```
bamazon
  - config
    - config.json
  - models
    - Product.js
    - index.js
  - public
    -js
      - app.js
    -css
      - style.css
    - index.html
  - routes
    - api-routes.js
    - html-routes.js
  - .gitignore
  - package.json
  - server.js
  ```

You'll like have some modifications to this (maybe another script file or stylesheet, or more models), but let this act as a guide for your project structure.

2. Inside your `server.js` file, create your Express app.

3. Create everything you'll need for your database and models, namely:

* Create a MySQL Database called `bamazon`.

* Create a Sequelize model called `Product`.

* The Product model should have each of the following fields:

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

* Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

4. Create your HTML and API routes. Your API routes should follow RESTful principles.

5. Create a front-end using HTML, CSS, and JavScript/jQuery to provide the customer with a listing of products available to purchase and the price. Customers should be able to select an item and specify a quantity, and then submit the order.

5. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should display a phrase like `Insufficient quantity!`, and then prevent the order from going through.

7. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

If this activity took you between 8-10 hours or more, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.

- - -

### Challenge #2: Manager View (Next Level)

Create a new page for a Manager's overview of the store. This view should display the below:

* List a set of menu options:

  * View Products for Sale

  * View Low Inventory

  * Add to Inventory

  * Add New Product

* If a manager selects `View Products for Sale`, the page should list every available item: the item IDs, names, prices, and quantities.

* If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

* If a manager selects `Add to Inventory`, your app should display an input that will let the manager "add more" of any item currently in the store.

* If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.

- - -

* If you finished Challenge #2 and put in all the hours you were willing to spend on this activity, then rest easy! If you're looking for an extra challenge, move on to the final level. Fair warning, it is not a simple task!

- - -

### Challenge #3: Supervisor View (Final Level)

1. Create a new Sequelize model called `Department`. Your model should include the following fields:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)

2. Modify the `Product` model so that there's a `product_sales` field, and modify your web app so that when a customer purchases anything from the store, the price of the product multiplied by the quantity purchased (that is to say the order total) is added to the product's `product_sales` column.

   * Make sure your app still updates the inventory listed in the `Products` table.

3. Create another page for the Supervisor's view of the store. Loading this page or view will list a set of menu options:

   * View Product Sales by Department
   
   * Create New Department

4. When a supervisor selects `View Product Sales by Department`, the app should display a summarized table of the store's sales by department. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

5. The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database.

6. If you can't get the table to display properly after a few hours, then feel free to go back and just add `total_profit` to the `departments` table.

   * Hint: You may need to look into GROUP BY statements and how to implement them in Sequelize.

   * Hint: You will probably want to use Sequelize Associations.

### Reminder: Submission on BCS

* Please submit the link to the Github Repository and the deployed Heroku link!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**
