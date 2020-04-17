const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");
const Userlocation = require("../userLocation/model");

const router = new Router();

// create new user with the following post request
router.post("/user", async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
// retrieve all users with the following get request
router.get("/user", async (req, res, next) => {
  try {
    const users = await User.findAll({ include: Userlocation });
    const usersIdNameAndLocation = users.map((user) => {
      return { userId: user.id, name: user.name, location: user.userLocation };
    });
    res.send(usersIdNameAndLocation);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
