const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: String,
  ProductID:String, 
  category: String,
  title: String,
  subTitle: String,
  image: String,
  price: String
});


module.exports = mongoose.model(
  "quickFitCart",
  cartSchema,
  "quickFitCart"
);