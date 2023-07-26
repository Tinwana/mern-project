const Product = require("../models/ProductModel");

const productServiceMiddleware = async (req, res, next) => {
  if (req.query.sort !== "asc" && req.query.sort !== "desc") {
    req.query.sort = "desc";
  }
  const filterBy = req.query.filter || "name";
  const filterValue = req.query.filter_value;
  let escapeFilterValue
  const page = parseInt(req.query.page) || 1;
  const sort = req.query.sort || "desc";
  const sortBy = req.query.sort_by || "name";
  let allProduct = await Product.find();
  const limit = req.query.limit || allProduct.length;
  if (!!sort || !!sortBy) {
    allProduct = await Product.find().sort({ [sortBy]: sort });
  }
  if (!!filterValue && !!filterBy) {
    escapeFilterValue= filterValue.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
    allProduct = await Product.find({ [filterBy]: { $regex: new RegExp(escapeFilterValue,'i') } });
  }
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  let stateGetProduct
  if(limit === allProduct.length) {
    stateGetProduct = "all"
  }
  else{
    stateGetProduct = ''
  }
  const productService = allProduct.slice(startIndex, endIndex);
  req.productService = {
    stateGetProduct,
    currentPage: page,
    totalPages: Math.ceil(allProduct.length / limit),
    limit: limit,
    products: productService,
  };
  next();
};
module.exports = productServiceMiddleware;
