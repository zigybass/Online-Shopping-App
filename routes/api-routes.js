const path = require("path");
const db = require("../models");
const Sequelize = require("sequelize")
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
        console.log(req.body)
        db.Products.update(
            stock_quantity = req.body.stock_quantity,
            { where: {
                id: req.params.id
            }}
        )
    })
}
