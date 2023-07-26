const express = require("express");
const productController = require("../controllers/ProductController");
const { authMiddleware } = require("../../middleware/authMiddleware");
const productRoute = express.Router();

productRoute.delete('/delete/:id',authMiddleware,productController.deleteProduct)
productRoute.put('/update/:id',authMiddleware,productController.updateProduct)
productRoute.post('/create',productController.createProduct)
productRoute.get('/detail/:id',productController.detailProduct)
productRoute.get('/get-all',productController.getAllProducts)



module.exports = productRoute;
