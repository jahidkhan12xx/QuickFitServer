const { default: mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
  email: String,
  // product: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'eshopProduct',
  //   required: true,
  // },
  ProductID:String, 
  category: String,
  title: String,
  subTitle: String,
  image: String,
});

// Create a compound unique index on email and product to enforce uniqueness
// cartSchema.index({ email: 1, product: 1 }, { unique: true });

module.exports = mongoose.model(
  "quickFitCart",
  cartSchema,
  "quickFitCart"
);