const path = require("path");

module.exports = function(app){
    
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/products", function (req, res) {
        db.Products.findAll().then( dbProducts => {
            res.json(dbProducts)
        })
    })

    // app.get("/shoppingcart", function(req,res){
    //     res.sendFile(path.join(__dirname, "../public/shopcart.html"))
    // })
    
 }