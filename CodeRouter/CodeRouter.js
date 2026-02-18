const express = require("express");
const router = express.Router();
const { Signup ,Login} = require("../Codecontrollers/Codecontrollers")

router.post("/signup", Signup);
router.post("/Login", Login);

module.exports = router;
