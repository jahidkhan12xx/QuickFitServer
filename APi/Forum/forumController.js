const forumCollection = require("../../Database/Schema/forum/forum.js");

const forumPost = async (req,res) => {
    const data = req.body;
  const result = await forumCollection.create(data);
  res.send(result);
};

const forumPostGet = async (req,res) => {
    const category = req.params.category;
  const result = await forumCollection.find({ category:category});
  // console.log(res);
  res.send(result);
};

const forumSinglePostGet = async (req,res) => {
    const id = req.params.id;
  const result = await forumCollection.findById(id);
  res.send(result);
};

const forumPostComment = async (req,res) => {
    const data = req.body;
  const { comment, userEmail, postId, userName, userPhoto } = data;

  try {
    const post = await forumCollection.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    post.comments.push({ text: comment, userEmail, userName, userPhoto });

    await post.save();

    res.send(post);
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

const forumPostLike = async (req,res) => {
    const data = req.body;
  const { postId, likeEmail } = data;

  const fetchPost = await forumCollection.findById(postId);
  const isEmailInTheArray = fetchPost.likes.includes(likeEmail);
  // console.log(isEmailInTheArray);

  if (!isEmailInTheArray) {
    let post = await forumCollection
      .findByIdAndUpdate(
        postId,
        {
          $push: { likes: likeEmail },
        },
        {
          new: true,
        }
      )
      .exec();
    // console.log(post);
    res.send("Liked") ;
  } else {
    let post = await forumCollection
      .findByIdAndUpdate(
        postId,
        {
          $pull: { likes: likeEmail },
        },
        {
          new: true,
        }
      )
      .exec();
    res.send("Like Removed!!") ;
  }
};

const forumGetNewestPost = async (req,res) => {
  try {
    const posts = await forumCollection.find({}).sort({ date: -1 }).exec();

    res.send(posts) ;
  } catch (error) {
    console.error("Error fetching newest posts:", error);
    throw error;
  }
};

const forumPopularPost = async (req,res) => {
  try {
    const posts = await forumCollection
      .aggregate([
        {
          $project: {
            _id: 1, // Include the post ID if needed
            title: 1, // Include other fields you want in the result
            likesCount: { $size: "$likes" },
            commnetsCount: { $size: "$comments" },
            userName: 1,
            userPhoto: 1,
            userEmail: 1,
            date: 1,
          },
        },
        {
          $sort: { likesCount: -1 },
        },
      ])
      .exec();
    
    res.send(posts);
  } catch (error) {
    console.error("Error fetching newest posts:", error);
    throw error;
  }
};

const forumSearch = async (req,res) => {
    const data = req.body;
  try {
    const { searchTerm } = data;
  } catch (error) {
    console.log(error);
  }
};

const forumPostsByEmail = async (req,res) => {
    const email = req.params.email;
  try {
    // const {email} = data;

    const posts = await forumCollection
      .find({ userEmail: email })
      .sort({ date: -1 });
    
    res.send(posts);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  forumPost,
  forumPostGet,
  forumSinglePostGet,
  forumPostComment,
  forumGetNewestPost,
  forumPopularPost,
  forumPostLike,
  forumSearch,
  forumPostsByEmail,
};
