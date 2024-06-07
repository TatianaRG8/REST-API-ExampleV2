const { sequelize } = require("../../db/db");
const { DataTYpes } = require("sequelize");

const Actor = sequelize.define("actor",
    {
        firstName: {
            type: DataTYpes.STRING,
            allowNull: false,
        }
        lastName: {
            type: DataTYpes,.STRING,
            allowNull: false,
        };
    })