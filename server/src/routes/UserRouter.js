const express = require("express");
const userController = require("../controllers/UserController");
const { authMiddleware } = require("../middleware/authMiddleware");
const userRouter = express.Router();

userRouter.get("/get-detail/:id",authMiddleware, userController.getDetailUser); 
userRouter.get("/get-all",authMiddleware, userController.getAllUsers); 
userRouter.post("/refresh-token", userController.refreshToken); 
userRouter.post("/sign-up", userController.createUser); 
userRouter.post("/sign-in", userController.loginUser); 
userRouter.put("/update/:id", userController.updateUser);  
userRouter.delete("/delete/:id",authMiddleware, userController.deleteUser);


module.exports = userRouter;
