const mongoose = require("mongoose");
const slugify = require("slugify");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a Name"],
    trim: true,
    maxlength: [50, "Name cannot be more than 50 Characters"],
  },
  slug: String,
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please add a valid email",
    ],
    unique: true,
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

AuthorSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model("Author", AuthorSchema);
