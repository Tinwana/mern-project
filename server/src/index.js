const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/index.js");
const cookieParser = require("cookie-parser");
require("dotenv").config();
console.log(process.env.PORT);

//variable
const PORT = process.env.PORT || 8000;
const mongoDb = process.env.MONGO_DB;

//app start
const app = express();

//middleware
app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser());

//connect mongodb
mongoose
  .connect(mongoDb)
  .then(() => {
    console.log("connect to db successfully");
  })
  .catch((e) => {
    console.log(e);
  });

//route app
routes(app);

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
