const db = require("../models");
// const Op = Sequelize.Op;

module.exports = function (app) {

    app.get("/api/products", function (req, res) {
        db.Products.findAll().then( dbProducts => {
            res.json(dbProducts)
        })
    })

    //load front end with products in stock
    app.get("/api/load", function (req, res) {
        db.Products.findAll({}).then( dbProducts => {
            res.json(dbProducts)
    })
})

    app.put("/api/updateInv/:id", function (req, res) {
        console.log("this is:" + req.body.stock_quantity)
        db.Products.update(
            {stock_quantity: req.body.stock_quantity},
            { where: {
                id: req.params.id
            }}
        ).then( (data) => {
            res.json(data)
        })
    })
}
