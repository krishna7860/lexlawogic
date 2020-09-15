const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Author = require("../models/Author");

exports.addAuthor = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  const author = await Author.find({ email });

  if (author) {
    return next(new ErrorResponse(`Author Already found Please login `, 404));
  }

  author = await Author.create(req.body);

  res.status(201).json({
    success: true,
    data: author,
  });
});
