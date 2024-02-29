const userInteraction = require("../../Database/Schema/userInteraction/userInteraction")

const updateLikes = async(req,res) =>{
    const email = req.params.email;

    const result = await  userInteraction.updateOne({},{
        $push:{
            likes:email
        }
    },{
        new:true
    })

    res.send(result);
}



module.exports = {
    updateLikes
}


