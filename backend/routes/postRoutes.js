const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {

  const post = await Post.create(req.body);

  res.json(post);
});

router.get("/", async (req, res) => {

  const posts = await Post.find()
    .populate("user")
    .sort({ createdAt: -1 });

  res.json(posts);
});

router.put("/like/:id", async (req, res) => {

  const post = await Post.findById(req.params.id);

  post.likes.push(req.body.userId);

  await post.save();

  res.json(post);
});

module.exports = router;