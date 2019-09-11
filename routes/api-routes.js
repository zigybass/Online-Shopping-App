const path = require("path");
const db = require("../models");
const Sequelize = require("sequelize")
const Op = Sequelize.Op;

module.exports = function (app) {

    app.get("/api/products", function (req, res) {
        db.Products.findAll().then( dbProducts => {
            res.json(dbProducts)
        })
    })

    app.get("/api/load", function (req, res) {
        db.Products.findAll().then( dbProducts => {
            res.json(dbProducts)
    })
})
}
