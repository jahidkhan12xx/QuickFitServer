const userInteraction = require("../../Database/Schema/userInteraction/userInteraction")

const updateLikes = async(email) =>{

    const res = await  userInteraction.updateOne({},{
        $push:{
            likes:email
        }
    },{
        new:true
    })

    return res;
}



module.exports = {
    updateLikes
}


