const express = require("express")
const app = express();
const cors = require("cors");
app.use(express.json());
const multer = require("multer");
require("dotenv").config();
// require("./db/db")
const mongoose = require('mongoose')

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Databse Connect");
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});


const upload = multer({ storage: storage });
app.use(cors());
app.use("/Product", require("./CodeRouter/CodeRouter"));
app.use("/cart", upload.single("images"), require("./CodeRouter/ProductRouter"))


app.get("", (req, res) => {
  res.json({ meessage: "success" })
})

app.listen(8000, () => {
  console.log("Server Create Successfull");
});