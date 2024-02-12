const cartCollection = require("../../Database/Schema/cart/cart");

const postCartData = async (sendProduct) => {
  const existingCartItem = await cartCollection.find({
    ProductID:sendProduct.ProductID,
  })
  console.log(existingCartItem)

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


const deleteCartData =(id) => {
  const res = cartCollection.findByIdAndDelete(id)
  return res;
}


module.exports = {
  getCartData,
  postCartData,
  getCartAllData,
  deleteCartData
};