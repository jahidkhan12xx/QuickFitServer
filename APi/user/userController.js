const userCollection = require("../../Database/Schema/users/users")

const getAllUser= () =>{
    const res  = userCollection.find();
    return res;
}


const addUser = async(data) =>{
    const isExist = await userCollection.findOne({email:data.email});
    
    if(!isExist){
        const res = await  userCollection.create(data);
    return res;
    }
    else{
        return {message : "Can not added"}
    }
    
}

const getSingleUser = (email) =>{
    const res = userCollection.findOne({email:email});
    return res;
}


const deleteUserData = async (id)=> {
    const res = await userCollection.findByIdAndDelete(id)
    return res;
  }

const updateUserRole = async (id) => {
    const res = await userCollection.findByIdAndUpdate(id, {
      $set : {
        role: 'admin'
      }
    })
  }
const updatePublisherRole = async (id) => {
    const res = await userCollection.findByIdAndUpdate(id, {
      $set : {
        role: 'publisher'
      }
    })
  }




module.exports = {
    getAllUser,
    addUser,
    getSingleUser,
    deleteUserData,
    updateUserRole,
    updatePublisherRole
}