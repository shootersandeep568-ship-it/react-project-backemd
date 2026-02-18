const express = require("express");
const router = express.Router();
const { Createproduct, Productapi, AddToCart, getCart, deleteCartItem } = require("../Codecontrollers/Productcontrollers")

// ========================= router bnana==========================================================
router.post("/Createproduct", Createproduct);
router.get("/Productapi", Productapi);
router.post("/addtocart/:id", AddToCart);
router.get("/getCart", getCart);
router.post("/deleteCartItem/:id",deleteCartItem);


// ===================================================================================
module.exports = router;