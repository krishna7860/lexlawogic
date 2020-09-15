const Post = require("../models/Post");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Author = require("../models/Author");

// @desc          Get Post
// @route         GET /api/v1/posts
// @route         GET /api/v1/post/:postId/
// @access        Public

exports.getPosts = asyncHandler(async (req, res, next) => {
  const posts = await Post.find();

  return res.status(200).json({
    success: true,
    count: posts.length,
    data: posts,
  });
});

// @desc          Get Signle Post
// @route         GET /api/v1/post/:id
// @access        Public

exports.getPost = asyncHandler(async (req, res, next) => {
  const post = await (await Post.findById(req.params.id)).populate({
    path: "author",
    select: "name",
  });

  if (!post) {
    return next(
      new ErrorResponse(`No pot with the id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: post,
  });
});

// @desc          Add a Post
// @route         POST /api/v1/post/
// @access        Private

exports.addPost = asyncHandler(async (req, res, next) => {
  // get the bootcamp id
  req.body.authorId = req.params.authorId;

  console.log(req.params.authorId);

  const author = await Author.findById(req.params.authorId);

  if (!author) {
    return next(
      new ErrorResponse(`No Author with the id of ${req.params.authorId}`, 404)
    );
  }

  const post = await Post.create(req.body);

  res.status(201).json({
    success: true,
    data: post,
  });
});

// @desc          Update a Courses
// @route         PUT /api/v1/courses/:id
// @access        Private

exports.updatePost = asyncHandler(async (req, res, next) => {
  let post = await Course.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  post = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    success: true,
    data: post,
  });
});

// @desc          Delete a Post
// @route         DELETE /api/v1/post/:id
// @access        Private

exports.deletePost = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }

  await post.remove();

  res.status(200).json({
    success: true,
    data: {},
  });
});
