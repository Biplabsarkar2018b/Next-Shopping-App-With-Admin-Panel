const { Schema, model,models } = require("mongoose");

const productSchema = new Schema({
    title:String,
    desc:String,
    price:Number,
});

export const ProductModel = models.Products || model('Products',productSchema);