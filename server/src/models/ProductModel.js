const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: {
      primary: { type: String, required: true },
      subImage: [{ type: String }],
    },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    sold: { type: Number, default: 0 },
    countInStock: { type: Number, required: true },
    ratting: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
