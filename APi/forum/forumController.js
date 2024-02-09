const forumCollection = require("../../Database/Schema/forum/forum")

const forumPost =  (data) => {
    const res = forumCollection.create(data)
    return res
}

const forumPostGet = (category) => {
    const res = forumCollection.find({category: category})
    return res
}

const forumSinglePostGet = (id) => {
    const res = forumCollection.findById(id);
    return res
    console.log("it is working")
}

const forumPostComment = async (data) => {
    const { comment, userEmail, postId } = data;
  
    try {
      // Use await to execute the findById query and get the document
      const post = await forumCollection.findById(postId);
  
      if (!post) {
        // Handle the case where the post with the given ID is not found
        throw new Error("Post not found");
      }
  
      // Push the new comment to the comments array
      post.comments.push({ text: comment, userEmail });
  
      // Save the updated document
      await post.save();
  
      return post;
    } catch (error) {
      console.error('Error updating comment:', error);
      throw error;
    }
  };

module.exports = {
    forumPost, forumPostGet, forumSinglePostGet, forumPostComment
}