const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//Get all products from route api/products
module.exports.get_products = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//Get one product from route api/products/:id
module.exports.get_one_product = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Could not find the product");
  }
});
