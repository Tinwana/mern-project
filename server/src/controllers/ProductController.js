const Product = require("../models/ProductModel");

class productController {
  async createProduct(req, res) {
    const { name, image, type, price, countInStock, ratting, description } =
      req.body;
    try {
      const checkProduct = await Product.findOne({ name: name });
      if (
        !name ||
        !image ||
        !type ||
        !price ||
        !countInStock ||
        !ratting ||
        !description
      ) {
        return res.status(400).json({
          status: "error",
          message: "input required!",
        });
      } else if (checkProduct !== null) {
        return res.status(400).json({
          status: "error",
          message: "name of product is already in used",
        });
      } else {
        const createProduct = await Product.create({
          name,
          image,
          type,
          price,
          countInStock,
          ratting,
          description,
        });
        if (createProduct) {
          return res.status(200).json({
            status: "OK",
            message: "success",
            data: createProduct,
          });
        }
      }
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
  async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const updateProduct = await Product.findOneAndUpdate(
        { _id: productId },
        req.body,
        { new: true }
      );
      if (updateProduct === null) {
        return res.status(200).json({
          status: "not found",
          message: "product not found!",
        });
      } else if (!productId) {
        return res.status(200).json({
          status: "not found",
          message: "product id param not found!",
        });
      } else {
        return res.status(200).json({
          status: "OK",
          message: "update product successfully",
          data: updateProduct,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }

  async detailProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const detailProduct = await Product.findOne({ _id: productId });
      if (detailProduct === null) {
        return res.status(404).json({
          status: "not found",
          message: "Product not found!",
        });
      } else {
        return res.status(200).json({
          status: "OK",
          message: "get detail product successfully",
          data: detailProduct,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }

  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      const deleteProduct = await Product.findByIdAndDelete(productId, {
        new: true,
      });
      if (deleteProduct === null) {
        return res.status(404).json({
          status: "error",
          message: "Product not found",
        });
      } else {
        return res.status(200).json({
          status: "OK",
          message: "delete product successfully",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
  async getAllProducts(req, res) {
    try {
      const allProduct = await Product.find();
      if (allProduct === null) {
        return res.status(200).json({
          status: "404",
          message: "out of product in stock!",
        });
      }else {
        return res.status(200).json({
          status: "OK",
          message: `select ${req.productService.stateGetProduct} products successfully`,
          data: req.productService,
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "catch error",
        message: error.message,
      });
    }
  }
}

module.exports = new productController();
