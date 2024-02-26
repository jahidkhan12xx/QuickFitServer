const cartCollection = require("../../Database/Schema/cart/cart");

const postCartData = async (req,res) => {
    const sendProduct = req.body;
    console.log(sendProduct);
  const existingCartItem = await cartCollection.find({
    ProductID:sendProduct.ProductID,
  })

  const findEmail = existingCartItem?.find(item=>item.email == sendProduct.email)
    if (findEmail) {
      res.send( { message: "product has already in the cart" });
  
  }
  const result = await cartCollection.create(sendProduct);
  res.send(result);
};


const getCartData = async(req,res) => {
    const id = req.params.id
  const result = await cartCollection.find({ email: id });
  res.send(result);
};


const getCartAllData = async(req,res) => {
    const id = req.params.id
  const result = await cartCollection.find();
  res.send(result);
};


const deleteCartData = async (req,res) => {
    const id = req.params.id ;
  const result = await cartCollection.findByIdAndDelete(id)
  res.send(result)
}


module.exports = {
  getCartData,
  postCartData,
  getCartAllData,
  deleteCartData
};