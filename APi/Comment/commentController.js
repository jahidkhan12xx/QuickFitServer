
const commentCollection = require("../../Database/Schema/comment/commentSchema");


const addComment = (comment) =>{
    const res = commentCollection.create(comment);
    return res;
}

const getComment = (blogId) =>{
    const res = commentCollection.find({blogId:blogId});
    return res;
}


module.exports = {
    addComment,
    getComment
}
