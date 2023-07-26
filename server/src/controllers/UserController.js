const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const {
  generalAccessToken,
  generalRefreshToken,
  refreshTokenService
} = require("../service/JwtService");

class userController {
  async createUser(req, res, next) {
    try {
      const { name, email, password, confirmPassword, phone } = req.body;
      const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const isEmail = regEmail.test(email);
      const checkEmail = await User.findOne({ email: email });
      const hash = bcrypt.hashSync(password, 10);
      if (!name || !email || !password || !confirmPassword || !phone) {
        return res.status(403).json({
          status: "error",
          message: "the input is required",
        });
      } else if (!isEmail) {
        return res.status(403).json({
          status: "error",
          message: "It is not an email!",
        });
      } else if (password !== confirmPassword) {
        return res.status(403).json({
          status: "error",
          message: "Password confirm is not correct",
        });
      } else if (checkEmail !== null) {
        return res.status(403).json({
          status: "error",
          message: "Email is already in used",
        });
      } else {
        const createUser = await User.create({
          name,
          email,
          password: hash,
          phone,
        });
        if (createUser) {
          return res.status(200).json({
            status: "OK",
            message: "success",
            data: createUser,
          });
        }
      }
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
  async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const checkUser = await User.findOne({ email: email });
      if (!email || !password) {
        return res.status(403).json({
          status: "error",
          message: "the input is required",
        });
      } else if (checkUser === null) {
        return res.status(403).json({
          status: "error",
          message: "User is not defined!",
        });
      } else {
        const comparePassword = bcrypt.compareSync(
          password,
          checkUser.password
        );
        if (!comparePassword) {
          return res.status(403).json({
            status: "error",
            message: "Password is incorrect!",
          });
        } else {
          const access_token = generalAccessToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin,
          });
          const refresh_token = generalRefreshToken({
            id: checkUser.id,
            isAdmin: checkUser.isAdmin,
          });
          return res.status(200).json({
            status: "OK",
            message: "success",
            access_token,
            refresh_token,
          });
        }
      }
    } catch (error) {
      return res.status(404).json({ message: error.message });
    }
  }
  async updateUser(req, res, next) {
    try {
      const userId = req.params.id;
      const { name, phone, password, isAdmin } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      if (!userId) {
        return res.status(404).json({
          status: "error",
          message: "userId param is required!",
        });
      } else {
        const userUpdate = await User.findOneAndUpdate(
          { _id: userId },
          { name, phone, isAdmin, password: hash },
          { new: true }
        );
        if (userUpdate) {
          return res.status(200).json({
            status: "OK",
            message: "success",
            data: userUpdate,
          });
        } else {
          return res.status(200).json({
            status: "error",
            message: "user not found",
          });
        }
      }
    } catch (error) {
      return res.status(404).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
  async deleteUser(req, res, next) {
    try {
      const userId = req.params.id;
      const checkUser = await User.findOne({ _id: userId });

      if (!userId) {
        return res.status(404).json({
          status: "error",
          message: "user di param is required!",
        });
      } else if (checkUser === null) {
        return res.status(404).json({
          status: "error",
          message: "User not found!",
        });
      } else {
        const deleteUser = await User.findByIdAndDelete(userId);
        if (deleteUser) {
          return res.status(200).json({
            status: "OK",
            message: "User deleted!",
          });
        }
      }
    } catch (error) {
      return res.status(404).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
  async getAllUsers(req, res, next) {
    try {
      const allUser = await User.find();
      return res.status(200).json({
        status: "OK",
        message: "success",
        data: allUser,
      });
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }

  async getDetailUser(req, res, next) {
    try {
      const userId = req.params.id;
      const user = await User.findOne({ _id: userId });

      if (!userId) {
        return res.status(404).json({
          status: "error",
          message: "user di param is required!",
        });
      } else if (user === null) {
        return res.status(404).json({
          status: "error",
          message: "User not found!",
        });
      } else {
          return res.status(200).json({
            status: "OK",
            message: "User has found!",
            data: user,
          });
      }
    } catch (error) {
      return res.status(404).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
  async refreshToken (req, res) {
    try {
      const token = req.headers.token.split(' ')[1];
      if(!token) {
        return res.status(200).json({
          status: "OK",
          message: "Token is required!",
        });
      }
      else {
        const response = await refreshTokenService(token)
        return res.status(200).json(response)
      }
    } catch (error) {
      return res.status(404).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
}
module.exports = new userController();
