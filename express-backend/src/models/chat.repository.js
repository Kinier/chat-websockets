const Message = require("../entities/message.entity")

/** 
 * Stores chat messages, and ids of clients that send them, 
 * @type {*} array of objects*/
 let chat = [];





const addMessage = ({msg: data, clientId: clientId, clientName: clientName})=>{
    let msg = new Message(data.message, clientId, clientName)
    chat.push(msg)
    return msg;
}


module.exports = {
    addMessage
}