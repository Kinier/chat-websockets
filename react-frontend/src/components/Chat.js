import React, { useState, useRef, useEffect } from "react";




function Chat({ messages: messages }) {
    const endOfChat = useRef(null)


    useEffect(() => {
        endOfChat.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])



    return (
        <div className="flex flex-col overflow-hidden  h-screen max-h-screen text-gray-300 scroll-m-5  w-4/6 divide-y divide-slate-700 border-2 rounded-md border-zinc-700">
            {messages.map((v, i) => {
                return (
                    <div className="flex min-h-10 flex-col" key={i}>
                        <div className="flex  m-2 items-center text-xs text-zinc-500 overflow-hidden">
                            {v.clientName} {v.time}
                        </div>

                        <div className="flex m-2 break-all text-left">
                            {v.message} 
                        </div>
                    </div>
                )
            })}
            <div ref={endOfChat} />
        </div>
    )
}


export default Chat;