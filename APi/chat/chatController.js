const chatCollection = require("../../Database/Schema/chat/chatSchema")

const getChat = () =>{
    const result = chatCollection.find();
    return result;
}



module.exports = {
    getChat
}