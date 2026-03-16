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
    deleteallproduct,
} = require("../Codecontrollers/Productcontrollers")

// ========================= router bnana==========================================================
router.post("/Createproduct", Createproduct);
router.get("/Productapi", Productapi);
router.post("/AddToCart/:id", AddToCart);
router.get("/getCart", getCart);
router.post("/deleteCartItem/:id", deleteCartItem);
router.post("/addQuantity/:id", AddQuantity);
router.post("/subQuantity/:id", subQuantity);
router.post("/updateData/:id", updateData);
router.post("/deleteallproduct/:id", deleteallproduct);


// ===================================================================================
module.exports = router;