const chatRepository = require( "../models/chat.repository")

const newMessage = ({msg:msg, clientId: clientId, clientName: clientName}) => {
   
    return chatRepository.addMessage({msg: msg, clientId: clientId, clientName: clientName})

}


module.exports = {
    newMessage,

}