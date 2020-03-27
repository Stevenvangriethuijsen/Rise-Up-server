const Sequelize = require("sequelize");
const db = require("../db");
const Friend = require("../friends/model");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Friend.belongsTo(User);
User.hasMany(Friend);

module.exports = User;
