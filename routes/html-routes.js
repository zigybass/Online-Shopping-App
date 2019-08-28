const path = require("path");

module.exports = function(app){
    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/login.html"))
    })

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/createAccount.html"))
    })

    app.get("/", function(req,res){
        res.sendFile( path.join(__dirname, "../public/sport.html"))
    })
    app.get("/"), function(req,res){
        res.sendFile( path.join(__dirname, "../public/userPortal.html"))
    }
 }