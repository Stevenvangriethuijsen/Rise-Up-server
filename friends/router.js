const { Router } = require("express");
const Friend = require("./model");

const router = new Router();

// create a new  with the following post request
router.post("/friend", async (req, res, next) => {
  try {
    const addFriend = await Friend.create(req.body);

    res.status(201).json(addFriend);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
