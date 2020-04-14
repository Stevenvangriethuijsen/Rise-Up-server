const { Router } = require("express");
const Userlocation = require("./model");
const auth = require("../authentication/middleware");

const router = new Router();

// create new profile with the following post request
router.post("/user/location", auth, async (req, res, next) => {
  try {
    const newUser = await Userlocation.create(req.body);

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});
// retrieve all profiles with the following get request
router.get("/user/location", async (req, res, next) => {
  try {
    const userLocations = await Userlocation.findAll();

    res.send(userLocations);
  } catch (error) {
    next(error);
  }
});

router.get("/user/location/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const location = await Userlocation.findByPk(id);

    res.send(location);
  } catch (error) {
    next(error);
  }
});

router.put("/user/location/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;

    const location = await Userlocation.findByPk(id);

    const updated = await location.update(req.body);

    res.send(updated);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
