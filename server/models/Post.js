const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, "Please Add a Post Title"],
  },
  description: {
    type: String,
    required: [true, "Please Add a description"],
  },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: "Author",
    required: false,
  },

  readTime: {
    type: String,
  },
  tags: {
    type: [String],
    required: [true, "Please Add at least one tag"],
  },
  banner: {
    type: String,
    default: "no.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Post", PostSchema);
