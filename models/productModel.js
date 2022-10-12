const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviews = require("./reviewModel");

const ProductSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    defualt: 0,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  reviews: [reviews],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0,
  },
  date_added: {
    type: Date,
    defualt: Date.now,
  },
});

module.exports = Product = mongoose.model("Product", ProductSchema);
