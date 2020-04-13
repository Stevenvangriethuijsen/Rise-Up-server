const { Router } = require("express");
const { toJWT } = require("./jwt");
const bcrypt = require("bcrypt");
const User = require("../user/model");
const Userlocation = require("../userLocation/model");

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
      include: Userlocation,
    });
    console.log(user, "logging user");
    if (!user) {
      return res.status(400).send("User not found");
    }

    const correct = bcrypt.compareSync(password, user.password);

    if (correct) {
      const jwt = await toJWT({ userId: user.id });
      console.log("jwt test:", jwt);

      return res.send({
        jwt: jwt,
        userId: user.id,
        name: user.name,
        userLocation: user.userLocation,
      });
    }

    return res.status(400).send("The password is incorrect");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
