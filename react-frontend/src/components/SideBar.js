import React from "react"


function SideBar({username: username, setUsername: setUsername}) {




    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    
                    
                    <li>
                        <a href="#" id={"username_change"} className=" flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap m-2">Your name</span>
                            <input type="text" className="w-full bg-slate-600" onChange={(e)=>{setUsername(e.target.value) }} value={username}>

                            </input>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </aside>
    )
}


export default SideBar