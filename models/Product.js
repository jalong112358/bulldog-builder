const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
  productName: {
    type: String
  },
  slug: {
    type: String
  },
  totalPrice: {
    type: Number
  },
  specs: {
    type: Array
  },
  productId: {
    type: Number
  },
  variationId: {
    type: Number
  },
  pathIndex: {
    type: Array
  },
  customText: {
    type: String
  },
  imageNumber: {
    type: Number
  },
  hasCustomText: {
    type: String
  }
});

module.exports = Product = mongoose.model("product", ProductSchema);
