const Sequelize = require("sequelize");
const db = require("../db");
const Friend = require("../friends/model");
const Userprofile = require("../userProfile/model");

const User = db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Friend.belongsTo(User);
User.hasMany(Friend);

Userprofile.belongsTo(User);
User.hasOne(Userprofile);

module.exports = User;
