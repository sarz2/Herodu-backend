const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

//Public Routes
//Get all products from route api/products
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 6;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword, //So that we don't have to type in the whole name to search for something
          $options: "i", //Not case sensitive
        },
      }
    : {};

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

//Get one product from route api/products/:id
const getOneProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Could not find the product");
  }
});

//get top rated products from route api/products/top
const getTopRatedProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

//reduce quantity in product after order from route api/products/:id/:qty
const reduceQtyInProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.countInStock = product.countInStock - req.params.qty;
  }
  await product.save();

  res.json(product);
});

//Private Routes User
//Create review from route /api/products/:id/reviews
const createReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    const alreadyReviewed = product.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Product already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    product.reviews.push(review);

    product.numReviews = product.reviews.length;

    product.rating =
      product.reviews.reduce((acc, item) => item.rating + acc, 0) /
      product.reviews.length;

    await product.save();
    res.status(201).json({ message: "Review Added" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getOneProduct,
  getProducts,
  createReview,
  getTopRatedProducts,
  reduceQtyInProduct,
};
