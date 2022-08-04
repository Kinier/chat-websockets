import React, { useEffect, useState } from "react";
import { w3cwebsocket as Websocket } from 'websocket'
import Chat from "./Chat"
const clientSocket = new Websocket("ws://localhost:5000")
function Socket({ username: username, myMessage: myMessage, setMyMessage: setMyMessage, myAction: myAction }) {

    const [isConnected, setIsConnected] = useState(false)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        console.log(messages)
    }, [messages])

    const handleMyMessageInput = (e) => {
            setMyMessage(e.target.value)
    }


    const handleEnterInput = (e) => {
        if (e.key === "Enter") {
            let username_change = document.querySelector("#username_change")
            if (username == "") {

                username_change.classList.add("username_change_need")
                setTimeout(() => {
                    username_change.classList.remove("username_change_need")
                }, 5000);
                return;
            }
            
            if (typeof username_change.children[1] !== "undefined" && typeof username_change.children[2] !== "undefined") {
                username_change.children[1].textContent = username
                username_change.children[2].remove()
            }



            sendMyDataToServer();
            e.target.value = ""
            setMyMessage("")

        }
    }

    const handleLoginClick = (e) => {
        let username_change = document.querySelector("#username_change")

        if (username == "") {
            username_change.classList.add("username_change_need")
            setTimeout(() => {
                username_change.classList.remove("username_change_need")
            }, 5000);
            return;
        }

        if (typeof username_change.children[1] !== "undefined" && typeof username_change.children[2] !== "undefined") {
            username_change.children[1].textContent = username
            username_change.children[2].remove()
        }



        sendMyDataToServer();
        myAction.current = "newMessage";
        e.target.remove()
    }

    const sendMyDataToServer = () => {
        clientSocket.send(JSON.stringify({ "message": myMessage, "action": myAction.current, "clientName": username }))

    }

    clientSocket.onopen = () => {

        console.log('WebSocket Client Connected');

        setIsConnected(true)

    };

    clientSocket.onmessage = (message) => {
        const answer = JSON.parse(message.data)
        if (answer.action == "newMessage") {
            setMessages(currentMsgs => [...currentMsgs,
            { "message": answer.message, "clientId": answer.clientId, "clientName": answer.clientName, "time": answer.time },
            ])
        }
    };

    clientSocket.onclose = (message) => {
        console.log(message);
        setIsConnected(false)
    }

    clientSocket.onerror = (msg) => {
        console.log("Ошибка")
        setIsConnected(false)
    }


    return (
        <div className="flex flex-col items-center h-full w-full overflow-y-auto">

            <Chat messages={messages} setMessages={setMessages} />


            <h1>
                {isConnected
                    ? "Подключен"
                    : "Не подключен к серверу"
                }
            </h1>

            <div className="flex w-5/6 flex-row justify-around">
                <input type={"text"} className={"flex w-3/6 justify-end bg-slate-600  bg-contain bg-no-repeat bg-center transition ease-in-out delay-10  hover:-translate-y-1 hover:scale-110 duration-300 text-zinc-900 text-xl"} onChange={handleMyMessageInput} onKeyPress={handleEnterInput}>
                </input>

                <button type="button" onClick={handleLoginClick} className={"bg-slate-900 rounded-md h-14"}>Войти</button>
            </div>


        </div>
    )
}





export default Socket