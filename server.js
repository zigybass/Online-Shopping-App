const express = require("express");
const db = require("./models")

const app = express();
const PORT = process.argv.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.get("/", (req, res) => res.sendFile(""))


db.sequelize.sync({ force: true }).then(function () { 
app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT)
})
})