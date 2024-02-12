
const favCollection = require("../../Database/Schema/favourite/favourite")

const addFavourites = async (data) => {
   
    const findData = await favCollection.find({ email: data.email });
 if (findData.length > 0) { 
   const isExist = findData.some(item => item.blogId === data.blogId);
   if (!isExist) {
     const res = await favCollection.create(data);
     return res;
   }
    else {
     return { message: "already exists in favorites." };
   }
 } 
 
 else {
 
   const res = await favCollection.create(data);
   return res;
 }

};

const getFavourites = (email) =>{
    const res = favCollection.find({email:email});
    return res;
}

const deleteFavourites = (id) =>{
    const res = favCollection.findByIdAndDelete(id);
    return res;
}

module.exports = {
    addFavourites,
    getFavourites,
    deleteFavourites
}