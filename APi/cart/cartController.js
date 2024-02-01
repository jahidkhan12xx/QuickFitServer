const cartCollection = require("../../Database/Schema/cart/cart");

const postCartData = async (sendProduct) => {


  // Check if the product is already in the user's cart
  const existingCartItem = await cartCollection.find({
    ProductID:sendProduct.ProductID,
  })
  console.log(existingCartItem)
  // if (existingCartItem?.email == sendProduct.email) {
  //     return { message: "product has already in the cart" };
  
  // }
  const findEmail = existingCartItem?.find(item=>item.email == sendProduct.email)
    if (findEmail) {
      return { message: "product has already in the cart" };
  
  }
  const res = cartCollection.create(sendProduct);
  return res;
};

const getCartData = (id) => {
  const res = cartCollection.find({ email: id });
  return res;
};

const getCartAllData = (id) => {
  const res = cartCollection.find();
  return res;
};

module.exports = {
  getCartData,
  postCartData,
  getCartAllData
};
