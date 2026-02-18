const express = require("express");
const Codemodels = require("../Codemodels/Codemodels");

// =============================== signup =====================================================
const Signup = async (req, res) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const createUser = new Codemodels({
    username: username,
    email: email,
    password: password,
  });
  const savedata = await createUser.save();
  if (savedata) {
    res.json({
      message: "Succesfull",
      status: true,
    });
  }
  else {
    res.json({
      message: "Wrong",
      status: false,
    });
  }
};
// ======================================================================================
// ================================login =================================================
const Login = async (req, res) => {
  console.log(req.body)
  try {
    const existuser = await Codemodels.find({});
    if (!existuser) {
      res.json({ message: " not found", status: false })
    }
    res.json({
      Alluser: existuser,
      status: true,
    });

  } catch (error) {
    console.log("Error login", error);
  }
}
// ============================================================================================
module.exports = { Signup, Login }