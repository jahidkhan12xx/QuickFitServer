const trackerCollection = require("../../Database/Schema/tracker/tracker");

const postTrackerData = async (req, res) => {
  const result = await trackerCollection.create(req.body);
  res.send(result);
};

const updateTrackerData = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const result = await trackerCollection.findByIdAndUpdate(id, {
    $set: {
      value: body?.value,
      status: body.status,
    },
  });
  res.send(result);
};

const getTrackerData = async (req, res) => {
  const result = await trackerCollection.find({ email: req.params.email });
  res.send(result);
};

const getCurrentTrackerData = async (req, res) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const date = currentDate.getDate();
  const today = year + "-" + month + "-" + date;

  const result = await trackerCollection.find({
    email: req.params.email,
    date: today,
  });

  res.send(result);
};

const getSingleTrackerData = async (req, res) => {
  const result = await trackerCollection.findById(req.params.id);
  res.send(result);
};

const deleteTrackerData = async (req, res) => {
  const result = await trackerCollection.findByIdAndDelete(req.params.id);
  res.send(result);
};

module.exports = {
  getTrackerData,
  postTrackerData,
  getCurrentTrackerData,
  updateTrackerData,
  getSingleTrackerData,
  deleteTrackerData,
};
