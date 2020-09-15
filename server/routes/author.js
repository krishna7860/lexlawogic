const express = require("express");
const { addAuthor } = require("../controller/author");

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(() => {})
  .post(addAuthor);

// router.route("/:id").get(getPost).put(updatePost).delete(deletePost);

module.exports = router;
