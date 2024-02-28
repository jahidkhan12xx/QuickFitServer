const userCollection = require("../../Database/Schema/users/users")

const getAllUser= async(req,res) =>{
    const result  = await userCollection.find();
    res.send(result);
}


const addUser = async(req,res) =>{
    const data = req.body;
    const isExist = await userCollection.findOne({email:data.email});
    
    if(!isExist){
        const result = await  userCollection.create(data);
    res.send(result);
    }
    else{
        res.send( {message : "Can not added"})
    }
    
}

const getSingleUser = async (req,res) =>{
    const email = req.params.email
    const result = await userCollection.findOne({email:email});
    res.send(result);
}


const deleteUserData = async (req,res)=> {
    const id = req.params.id
    const result = await userCollection.findByIdAndDelete(id)
    res.send(result);
  }

const updateUserRole = async (req,res) => {
    const id = req.params?.id
    const result = await userCollection.findByIdAndUpdate(id, {
      $set : {
        role: 'admin'
      }
    })
    res.send(result)
  }
const updatePublisherRole = async (req,res) => {
    const id = req.params?.id
    const result = await userCollection.findByIdAndUpdate(id, {
      $set : {
        role: 'publisher'
      }
    })
    res.send(result)
  }




module.exports = {
    getAllUser,
    addUser,
    getSingleUser,
    deleteUserData,
    updateUserRole,
    updatePublisherRole
}