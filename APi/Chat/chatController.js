const chatCollection = require("../../Database/Schema/chat/chatSchema")

const getChat = async() =>{
    const result = await chatCollection.find();
    result.send(result);
}



module.exports = {
    getChat
}