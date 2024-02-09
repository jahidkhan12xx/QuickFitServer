const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    category: String,
    img: String, // Image URL for the service
    title: String, // Title of the service

    description1: String, // First description
    description2: String, // Second description
    description3: String, // Third description

    benefitTitle: String, // Title of the benefits section
    benefitDescription: String, // Description of the benefits

    fitnessCardTitle: String, // Title of the fitness training card
    fitnessDescription: String, // Description of the fitness training card

    nutritionalCardTitle: String, // Title of the nutritional food card
    nutritionalDescription: String, // Description of the nutritional food card

    getCardTitle: String, // Title of the "Get Result" card
    getDescription: String, // Description of the "Get Result" card

    resultImage: String, // Image URL for the result section

    resultTitle: String, // Title of the result section
    resultdes: [String], // Array of strings containing result descriptions

    trainingProgramTitle: String, // Title of the training program section
    strategy: [String], // Array of strings containing strategy descriptions for training program
    fitnessImprovement: [String], // Array of strings containing fitness improvement descriptions
    result: [String] // Array of strings containing result descriptions
});

module.exports = mongoose.model("services", servicesSchema);
