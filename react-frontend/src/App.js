import logo from './logo.svg';
import './App.css';
import Game from "./components/SocketLogic"
import React, {useRef, useState} from 'react';
import SideBar from "./components/SideBar"

function App() {

  const [username, setUsername] = useState("")
  const [myMessage, setMyMessage] = useState("")
  let myAction = useRef("newClient")

  return (
    <div className="App w-screen bg-black h-screen text-zinc-500 flex flex-row  ">
        <SideBar username={username} setUsername={setUsername}/>
        <Game username={username} setUsername={setUsername} myMessage={myMessage} setMyMessage={setMyMessage} myAction={myAction}/>
    </div>
  );
}

export default App;
