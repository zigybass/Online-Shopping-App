const db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        db.Products.findAll({}).then(function (data) {
            res.json(data)
        });
    })
}

