const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
  const token = req.headers.token.split(" ")[1];
  const userId = req.params.id ? req.params.id : null;
  jwt.verify(token, "access_token", function (err, user) {
    const { payload } = user;
    if (err) {
      return res.status(500).json({
        status: "token error",
        message: "The Authentication Error occurred!",
      });
    } else if (payload?.isAdmin || payload?.id === userId) {
      next();
    } else {
      return res.status(500).json({
        status: "error",
        message: "The Authentication Error occurred!",
      });
    }
  });
};

module.exports = {
  authMiddleware,
};
