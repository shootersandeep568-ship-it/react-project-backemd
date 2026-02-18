const mongoose = require("mongoose")
// ============================== create schema ======================================
const Codemodel = new mongoose.Schema({
     username: {
        type: String,
        require:true
    }
    , email: {
        type: String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
// ===========================================================================================
// ======================================================================================
const Codemodels = mongoose.model("Codenest", Codemodel);
module.exports = Codemodels