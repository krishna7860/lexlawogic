const express = require("express");
const fileupload = require("express-fileupload")
const morgan = require("morgan");
const path = require("path");
const connect = require("./config/db");
const cors = require("cors");

require("dotenv").config();

connect();

console.log(process.env.NODE_ENV);

const app = express();

app.use(express.json());

app.use(cors());

app.use(fileupload())

app.use(express.static(path.join(__dirname, 'public')))

// Routes setup
const postRouter = require("./routes/post");


app.use("/api/v1/posts", postRouter);


process.env.NODE_ENV === "development" ? app.use(morgan("dev")) : null;

const PORT = process.env.SERVER_PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Unhandled Rejection : ${err.message}`);
  server.close(() => process.exit(1));
});
