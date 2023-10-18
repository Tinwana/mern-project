const jwt = require("jsonwebtoken");
const generalAccessToken = (payload) => {
  const accessToken = jwt.sign(
    {
      payload,
    },
    "access_token",
    { expiresIn: "3600s" }
  );
  return accessToken;
};

const generalRefreshToken = (payload) => {
  const refreshToken = jwt.sign(
    {
      payload,
    },
    "refresh_token",
    { expiresIn: `${60 * 60 * 3}s` }
  );
  return refreshToken;
};
const refreshTokenService = (token) => {
  return new Promise((resolve, reject) => {
    try {
      jwt.verify(token, "refresh_token", (error, user) => {
        if (error) {
          resolve({
            status: "error",
            message: "The Authentication!",
          });
        } else {
          const { payload } = user;
          const accessToken = generalAccessToken({
            id: payload?.id,
            isAdmin: payload?.isAdmin,
          });
          resolve({
            status: "OK",
            message: "success",
            access_token: accessToken,
          });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};
module.exports = {
  generalAccessToken,
  generalRefreshToken,
  refreshTokenService,
};
