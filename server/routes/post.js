const express = require("express");
const {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
} = require("../controller/post");

const router = express.Router({ mergeParams: true });

router.route("/:authorId").get(getPosts).post(addPost);

router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
