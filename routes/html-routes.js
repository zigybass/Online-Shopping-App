const path = require("path");
const db = require("../models");
const Sequelize = require("sequelize")


module.exports = function(app){
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
        // db.Products.findAll().then( function (dbResults) {
        //     res.json(dbResults)
        // })
    })

    // app.get("/shoppingcart", function(req,res){
    //     res.sendFile(path.join(__dirname, "../public/shopcart.html"))
    // })
    
 }
