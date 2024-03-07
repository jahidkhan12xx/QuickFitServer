const reviewsCollection =require("../../Database/Schema/reviews/reviews")

const getReviewsData = () =>{
   const res = reviewsCollection.find()
    return res
}

module.exports={
    getReviewsData
}