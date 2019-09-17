const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ProductSchema = new Schema({
	productName: {
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
	}
});

module.exports = Product = mongoose.model("product", ProductSchema);
