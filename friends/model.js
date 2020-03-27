const Sequelize = require("sequelize");
const db = require("../db");

const Friend = db.define("friend", {
  friendId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  friendshipStatus: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
});

module.exports = Friend;
