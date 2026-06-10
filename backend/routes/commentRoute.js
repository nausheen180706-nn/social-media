const express = require("express");
const router = express.Router();

const Comment = require("../models/Comment");

router.post("/", async (req, res) => {

  const comment = await Comment.create(req.body);

  res.json(comment);
});

router.get("/:postId", async (req, res) => {

  const comments = await Comment.find({
    post: req.params.postId
  }).populate("user");

  res.json(comments);
});

module.exports = router;