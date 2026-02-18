const mongoose = require("mongoose");

const AddToCartSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Createproduct",
  },
});

const Cart = mongoose.model("Cart", AddToCartSchema);
module.exports = Cart;