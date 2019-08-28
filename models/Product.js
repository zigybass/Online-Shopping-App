const DataTypes = require("sequelize");
const sequelize = require("../config/config.json");




module.exports = function (sequelize, DataTypes) {
    const Product = sequelize.define("Product") {
        name: DataTypes.STRING
    }
};