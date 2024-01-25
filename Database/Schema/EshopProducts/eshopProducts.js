const { default: mongoose } = require("mongoose");

const eshopProductSchema = new mongoose.Schema({
  category: String,
  date: String,
  title: String,
  subTitle: String,
  image: String,
  features: Array,
});

module.exports = mongoose.model(
  "eshopProduct",
  eshopProductSchema,
  "eshopProducts"
);