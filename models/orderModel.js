const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: [1, "Quantity can not be less than 1."],
        default: 1,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  bill: {
    type: Number,
    required: true,
    default: 0,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Order = mongoose.model("Order", OrderSchema);
