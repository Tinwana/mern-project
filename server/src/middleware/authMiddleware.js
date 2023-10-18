const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token.split(" ")[1];
    const userId = req.params.id ? req.params.id : null;
    jwt.verify(token, "access_token", async function (err, user) {
      if (err) {
        return res.status(200).json({
          status: "error",
          message: "The Authentication Error occurred!",
        });
      } else {
        const { payload } = user;
        const currentUser = await User.findById(payload?.id);
        if (payload?.isAdmin || payload?.id === userId) {
          req.user = currentUser;
          next();
        } else {
          return res.status(200).json({
            status: "error",
            message: "The Authentication Error occurred!",
          });
        }
      }
    });
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.json({ status: "error", message: "unauthorized access!" });
    }
    if (error.name === "TokenExpiredError") {
      return res.json({
        status: "error",
        message: "sesson expired try sign in!",
      });
    }
  }
};

module.exports = {
  authMiddleware,
};
