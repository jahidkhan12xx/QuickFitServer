const favCollection = require("../../Database/Schema/favourite/favourite.js");

const addFavourites = async (req, res) => {
  const data = req.body;

  const findData = await favCollection.find({ email: data.email });
  if (findData.length > 0) {
    const isExist = findData.some((item) => item.blogId === data.blogId);
    if (!isExist) {
      const result = await favCollection.create(data);
      res.send({ insertedId: result?._id });
    } else {
      res.send({ message: "already exists  favorites." });
    }
  } else {
    const result = await favCollection.create(data);
    res.send({ insertedId: result?._id });
  }
};

const getFavourites = async (req, res) => {
  const userEmail = req.params.email;
  const result = await favCollection.find({ email: userEmail });
  res.send(result);
};

const deleteFavourites = async (req, res) => {
  const favId = req.params.id;
  const result = await favCollection.findByIdAndDelete(favId);
  res.send(result);
};

module.exports = {
  addFavourites,
  getFavourites,
  deleteFavourites,
};
