module.exports = function (sequelize, Datatypes) {
    const Product = sequelize.define("Product", {
        product_name: Datatypes.STRING,
        department_name: Datatypes.STRING,
        price: Datatypes.INTEGER,
        stock_quantity: Datatypes.INTEGER
    })

    console.log("Product Table made")
    return Product;
}
