const express = require('express')
const app = express()
const WebSocket = require("ws")
const {v4} = require('uuid')

const {router} = require ("./routes/socket.routes")



// > http

app.use(express.static('public'))

// > websockets

const server = app.listen(5000 , ()=> console.log('> Server is up and running on port : ' + 5000))

const webSocketServer = new WebSocket.Server({server : server});
let clients = {}

webSocketServer.on("connection", (stream  )=>{

  const clientId = v4()
  clients[clientId] = {
    "stream": stream,
    "clientName": null
  }
  
  stream.on('message', function (message) {
    const msg = JSON.parse(message.toString());
    
    router(msg, stream, clients, clientId)
    
  })

  stream.on("close", ()=>{
    console.log("Вышел")
  })


  stream.on("error", ()=>{

  })


  console.log("Зашел")
  

})



