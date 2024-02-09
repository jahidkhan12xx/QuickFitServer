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
   
}

const forumPostComment = async (data) => {
    const { comment, userEmail, postId } = data;
  
    try {
      const post = await forumCollection.findById(postId);
      if (!post) {
       
        throw new Error("Post not found");
      } 
    post.comments.push({ text: comment, userEmail });
  
      await post.save();
  
      return post;
    } catch (error) {
      console.error('Error updating comment:', error);
      throw error;
    }
  }

  const forumGetNewestPost = async () => {
    try {
      const posts = await forumCollection.find({})
        .sort({ date: -1 })
        .exec();
  
     
      return posts;
    } catch (error) {
      console.error('Error fetching newest posts:', error);
      throw error;
    }
  };
  


module.exports = {
    forumPost, forumPostGet, forumSinglePostGet, forumPostComment, forumGetNewestPost
}