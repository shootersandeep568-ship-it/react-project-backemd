const express = require("express");
const router = express.Router();
const { protectRoute } = require("../protectRoute/protectRoutes");
const {
    Createproduct,
    Productapi,
    AddToCart,
    getCart,
    deleteCartItem,
    AddQuantity,
    subQuantity,
    updateData,
} = require("../Codecontrollers/Productcontrollers")

// ========================= router bnana==========================================================
router.post("/Createproduct", Createproduct);
router.get("/Productapi", Productapi);
router.post("/addtocart/:id", AddToCart);
router.get("/getCart", protectRoute, getCart);
router.post("/deleteCartItem/:id", deleteCartItem);
router.post("/addQuantity/:id", AddQuantity);
router.post("/subQuantity/:id", subQuantity);
router.post("/updateData/:id", updateData);

// ===================================================================================
module.exports = router;