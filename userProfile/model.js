const Sequelize = require("sequelize");
const db = require("../db");

const Userprofile = db.define("userProfile", {
  longitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  latitude: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

module.exports = Userprofile;
