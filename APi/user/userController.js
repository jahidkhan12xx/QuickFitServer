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


module.exports = {
    getAllUser,
    addUser,
    getSingleUser
}