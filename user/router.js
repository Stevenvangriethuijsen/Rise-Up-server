const { Router } = require("express");
const User = require("./model");
const bcrypt = require("bcrypt");

const router = new Router();

router.post("/user", async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.get("/user", async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
