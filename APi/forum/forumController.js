const forumCollection = require("../../Database/Schema/forum/forum");

const forumPost = (data) => {
  const res = forumCollection.create(data);
  return res;
};

const forumPostGet = (category) => {
  const res = forumCollection.find({ category: category });
  // console.log(res);
  return res;
};

const forumSinglePostGet = (id) => {
  const res = forumCollection.findById(id);
  return res;
};

const forumPostComment = async (data) => {
  const { comment, userEmail, postId, userName, userPhoto } = data;

  try {
    const post = await forumCollection.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    post.comments.push({ text: comment, userEmail, userName, userPhoto });

    await post.save();

    return post;
  } catch (error) {
    console.error("Error updating comment:", error);
    throw error;
  }
};

const forumPostLike = async (data) => {
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
    return "Liked";
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
    return "Like Removed!!";
  }
};

const forumGetNewestPost = async () => {
  try {
    const posts = await forumCollection.find({}).sort({ date: -1 }).exec();

    return posts;
  } catch (error) {
    console.error("Error fetching newest posts:", error);
    throw error;
  }
};

const forumPopularPost = async () => {
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
    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching newest posts:", error);
    throw error;
  }
};

const forumSearch = async (data) => {
  try {
    const { searchTerm } = data;
    console.log(searchTerm);
    console.log("lalal");
  } catch (error) {
    console.log(error);
  }
};

const forumPostsByEmail = async (email) => {
  try {
    // const {email} = data;

    const posts = await forumCollection
      .find({ userEmail: email })
      .sort({ date: -1 });
    console.log(posts);
    return posts;
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
