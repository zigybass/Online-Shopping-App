module.exports = function (sequelize, Datatypes) {
    const Products = sequelize.define("Products", {
        product_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        department_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        price: {
            type: Datatypes.INTEGER,
            allowNull: false
        },
        stock_quantity: {
            type: Datatypes.INTEGER,
            allowNull: false
    },

    },{
        timestamps: false
    });

    console.log("Products table made")
    return Products;
}
