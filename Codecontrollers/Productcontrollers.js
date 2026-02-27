const express = require("express");
const CreatetproducModel = require("../Codemodels/Productmodels");
const Cart = require("../Codemodels/Addtocartmodels");
const fs = require("fs");

// ========================== ======================================================
const Createproduct = async (req, res) => {
  console.log("Createproduct", req.body);
  console.log(req.file);

  const { title, description, reting, price, category, pyandmy } = req.body;
  const Createproduct = new CreatetproducModel({
    title: title,
    description: description,
    reting: reting,
    price: price,
    category: category,
    pyandmy: pyandmy,

    image: {
      data: fs.readFileSync("images/" + req.file.filename),
      contentType: "images/",
    },
  });
  const saveProduct = await Createproduct.save();
  if (saveProduct) {
    res.json({
      message: "Succesfull Create",
      status: true,
    });
  }
  else {
    res.json({
      message: "Something Wrong",
      status: false,
    });
  }
};
// ========================== api res bhejna =========================================================
const Productapi = async (req, res) => {
  // console.log(req.body)
  try {
    const existuser = await CreatetproducModel.find({});
    res.json({
      AllProduct: existuser,
      status: true,
    });
  } catch (error) {
    console.log("Error in find", error);
  }
}
// =======================================================================================================
// ===================================== add to cart id sand===============================================
const AddToCart = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const saveCartData = new Cart({
    item: id,
  });

  const savedata = await saveCartData.save();
  res.json({
    data: savedata,
  });
};
// ============================  populate krna ===========================================================
const getCart = async (req, res) => {
  const existData = await Cart.find({}).populate("item")
  res.json({ message: "true", data: existData })
};

// =========================================================================================================
const deleteCartItem = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const getData = await Cart.findOneAndDelete({ _id: id });
  res.json({
    success: true,
  });
};
// =========================AddQuantity ==========================================================
const AddQuantity = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await Cart.findByIdAndUpdate(id);
  data.quantity = parseInt(data.quantity + 1);
  await data.save();
  res.status(200).json(data);
};
// =============================subQuantity===============================================================
const subQuantity = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await Cart.findByIdAndUpdate(id);
  data.quantity = parseInt(data.quantity - 1);
  await data.save();
  res.status(200).json(data);
};

// ================================updateData=======================================================================

const updateData = async (req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  const updateData = await CreatetproducModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
  console.log(updateData)


};

module.exports = { Createproduct, Productapi, AddToCart, getCart, deleteCartItem, AddQuantity, subQuantity, updateData }