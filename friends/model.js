const Sequelize = require("sequelize");
const db = require("../db");

const Friend = db.define("friend", {
  friendUserId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  friendshipStatus: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

module.exports = Friend;
