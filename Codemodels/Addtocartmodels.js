const mongoose = require("mongoose");

const AddToCartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Createproduct",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Codenest"
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", AddToCartSchema);
module.exports = Cart;