const chatService = require("../services/chat.service")


const router = (message, stream, clients, clientId) => {
    switch (message.action) {
        case "newClient": // пока что создание клиента это просто добавление ему имени
            clients[clientId]["clientName"] = message.clientName
            break;

        case "newMessage":
            if (clients[clientId]["clientName"]) {
                let MessageObject = chatService.newMessage({ msg: message, clientId: clientId, clientName: clients[clientId]["clientName"] })


                for (const clientId in clients) {
                    clients[clientId]["stream"].send(
                        JSON.stringify(
                            { 
                                "action": "newMessage", 
                                "message": MessageObject.message, 
                                "clientId": MessageObject.clientId, 
                                "clientName": MessageObject.clientName,
                                "time": MessageObject.time
                            }
                        )
                    )
                }
            }
            break;


        default:
            stream.send(JSON.stringify({ "action": "error" }))
            break;
    }
}

module.exports = { router }