const Sequelize = require("sequelize");
const db = require("../db");

const Userlocation = db.define("userLocation", {
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Userlocation;
