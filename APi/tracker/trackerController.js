const trackerCollection = require("../../Database/Schema/tracker/tracker");

const postTrackerData = async (data) => {
  const res = await trackerCollection.create(data);
  return res;
};

const updateTrackerData = async (body, id) => {
  const res = await trackerCollection.findByIdAndUpdate(id, {
    $set: {
      value: body?.value,
      status: body.status,
    },
  });
};

const getTrackerData = async (Email) => {
  const res = await trackerCollection.find({ email: Email });
  return res;
};

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const date = currentDate.getDate();
const today = year + "-" + month + "-" + date;


const getCurrentTrackerData = async (Email) => {
  const res = await trackerCollection.find({ email: Email, date: today });
  return res;
};

const getPreviousTrackerData = async (Email) => {
    const res = await trackerCollection.find({ email: Email, date: {
      $ne:today
    }});
    return res;

};

const getSingleTrackerData = async (id) => {
  const res = await trackerCollection.findById(id);
  return res;
};

const deleteTrackerData = async (id) => {
  const res = await trackerCollection.findByIdAndDelete(id);
  return res;
};

module.exports = {
  getTrackerData,
  postTrackerData,
  getCurrentTrackerData,
  updateTrackerData,
  getSingleTrackerData,
  deleteTrackerData,
  getPreviousTrackerData
};
