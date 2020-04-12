const { Router } = require("express");
const Userprofile = require("./model");

const router = new Router();

// create new profile with the following post request
router.post("/user/profile", async (req, res, next) => {
  try {
    const newProfile = await Userprofile.create(req.body);

    res.status(201).json(newProfile);
  } catch (err) {
    next(err);
  }
});
// retrieve all profiles with the following get request
router.get("/user/profile", async (req, res, next) => {
  try {
    const userProfiles = await Userprofile.findAll();

    res.send(userProfiles);
  } catch (error) {
    next(error);
  }
});

router.get("/user/profile/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const profile = await Userprofile.findByPk(id);

    res.send(profile);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
