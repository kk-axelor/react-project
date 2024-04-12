import { useState } from 'react'
import './chatList.css'
const ChatList=()=>{
  const [addMode, setAddMode] = useState(true)
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="search" />
        </div>
        <img onClick={()=>setAddMode(prev=>!prev)} src={addMode ?"./plus.png":"./minus.png"} alt="" />
      </div>
<div className='chatListContainer'>
    {
      [...Array(15)].map((item)=>(
        <div className="item">
        <div className="avatar">
          <img src="./avatar.png" alt="" />
        </div>
        <div className='userData'>
          <h2>kunal kumar shaw</h2>
          <p>Hello kunal!</p>
        </div>
        <div className='timeAgo'>a hour ago</div>
      </div>
      ))
    }
    </div>
    </div>
  )
}

export default ChatList