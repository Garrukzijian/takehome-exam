// File: ./models/products.js

//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var QuotationSchema = new Schema({
  code: String,
  name: String,
  price: Number,
  qty:Number,
  remainingStock: Number,
  time:String
});

//Export function to create "ProductSchema" model class
module.exports = mongoose.model('quotation', QuotationSchema );