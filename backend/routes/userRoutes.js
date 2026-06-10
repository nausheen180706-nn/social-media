const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put("/follow/:id", async (req, res) => {

  const currentUser = await User.findById(req.body.userId);

  const targetUser = await User.findById(req.params.id);

  currentUser.following.push(targetUser._id);

  targetUser.followers.push(currentUser._id);

  await currentUser.save();
  await targetUser.save();

  res.json({ message: "User Followed" });
});

module.exports = router;