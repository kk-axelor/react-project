import React, { useState } from 'react'
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('')
  const handleEmojiClick = (e) => {
    setText(prev => prev + e.emoji)
    setOpen(false);
  }
  console.log(open)

  return (
    <div className='chat '>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div>
            <p>Kunal shaw</p>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">

        {
          [...Array(55)].map((_, i) => {
            const random =Math.floor(Math.random()*100) %2
            return (<div className={`messageContainer ${random===0 ?"own":"other"}`}>
              {
                random===1&&<img src="./avatar.png" alt="" />
              }
              <div className='texts'>
                <p className='message'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, fugiat.</p>
                <p className='timeago'>1min ago</p>
              </div>

            </div>
            )
          })
        }

      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type Your Message...'
          onChange={(e) => setText(e.target.value)}
          value={text} />


        <div className='emoji' >
          <div className='emojiPickerContainer'>
            <EmojiPicker open={open} onEmojiClick={(e) => handleEmojiClick(e)} />
          </div>
          <img onClick={() => setOpen(prev => !prev)} src="./emoji.png" alt="" />
        </div>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Chat
