
const commentCollection = require("../../Database/Schema/comment/commentSchema.js");


const addComment = async (req,res) =>{
    const comment = req.body;
    const result = await commentCollection.create(comment);
    res.send(result);
}

const getComment = async (req,res) =>{
    const blogId = req.params.blogId;
    const result = await commentCollection.find({blogId:blogId});
    res.send(result);
}


module.exports = {
    addComment,
    getComment
}
