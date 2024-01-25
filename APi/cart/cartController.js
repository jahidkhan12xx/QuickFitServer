const cartCollection = require("../../Database/Schema/cart/cart")

const postCartData = (product) =>{
  console.log(product)
  const res = cartCollection.create(product)
  return res
} 

const getCartData = (id) =>{
const res = cartCollection.find({email:id})
return res
}

module.exports = {
    getCartData, postCartData
}