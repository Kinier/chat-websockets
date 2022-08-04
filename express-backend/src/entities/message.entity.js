const {v4}  = require ('uuid')
module.exports = class message {

    constructor(message, clientId, clientName){
        this.id = v4();
        this.message = message;
        this.clientId = clientId
        this.clientName = clientName
        this.time = new Date().toLocaleTimeString();
    }

}

