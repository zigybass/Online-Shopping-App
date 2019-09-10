const express = require("express");
const db = require("./models")

const app = express();
const PORT = process.argv.PORT || 5000;

// Middleware for app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


db.sequelize.sync().then(function () { 
app.listen(PORT, function () {
    console.log("App listening on Port: " + PORT)
})
})