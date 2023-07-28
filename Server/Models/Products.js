const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    P_name : {
        type : String,
        unique : true,
        required : true
    },

    P_price : {
        type : String,
        required : true
    },

    P_desc : {
        type : String,
        required : true
    },

    P_image : {
        type : String,
        required : true
    },

    P_cat : {
        type : String,
        required : true
    },

    P_subcat : {
        type : String,
        required : true
    },

    avl_quantity : {
        type : Number ,
        required : true ,
        default : 0
    }

})

const products = mongoose.model("Products", ProductSchema)

module.exports = products