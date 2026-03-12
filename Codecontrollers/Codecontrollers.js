const express = require("express");
const Codemodels = require("../Codemodels/Codemodels");
const jwt = require("jsonwebtoken")

// =============================== signup =====================================================
const Signup = async (req, res) => {
  console.log(req.body);
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await Codemodels.findOne({ email });
    const createUser = new Codemodels({
      name: username,
      email: email,
      password: password, // hash karna better hoga
    });

    if (createUser) {
      await createUser.save();
      // Create JWT token
      const token = jwt.sign({ userId: createUser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      res.status(201).json({
        status: true,
        message: "User Created Successfully",
        user: createUser,
        token: token,
      });
    }
    else {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

  }
  catch (error) {
    console.log(error)
  }
}

// Create new user
// ================================login ====================================================

const Login = async (req, res) => {
  try {
   const email =  req.body.Emailid
   console.log(email)
    const existuser = await Codemodels.findOne({ email: email });
    console.log("hjghj",existuser)
    if (!existuser) {
      res.json({ message: "user not found", status: false });
    } else {
      let token = jwt.sign({ userId: existuser._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.json({
        token: token,
        status: true,
        user: existuser,
        message: "Login successfully !!",
      });
    }
  } catch (error) {
    console.log("Error in login", error);
  }
}


// ============================================================================================
module.exports = { Signup, Login }