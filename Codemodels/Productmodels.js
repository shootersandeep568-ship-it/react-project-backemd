const mongoose = require("mongoose")
// ======================== schema banana ========================================================
const Createproductschema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    }
    , description: {
        type: String,
        require: true
    },
    reting: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    pyandmy: {
        type: String,
        require: true
    },
    image: {
        data: Buffer,
        contentType: String,
    },

})
// ==================================================================================================
// ================================= modal cretae krna =============================================
const CreateproductModel = mongoose.model("Createproduct", Createproductschema);
module.exports = CreateproductModel
// ===================================================================================================