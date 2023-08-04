const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id ? req.params.id : null;
  jwt.verify(token, "access_token", function (err, user) {
    if (err) {
      return res.status(200).json({
        status: "error",
        message: "The Authentication Error occurred!",
      });
    } else {
      const { payload } = user;
      if (payload?.isAdmin || payload?.id === userId) {
        next();
      } else {
        return res.status(200).json({
          status: "error",
          message: "The Authentication Error occurred!",
        });
      }
    }
  });
};

module.exports = {
  authMiddleware,
};
