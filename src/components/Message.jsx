import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {
console.log(message);

  const {currentUser} =useContext(AuthContext)
  const {data} =useContext(ChatContext)
  return (
    <div className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
      <div className="messageInfo">
        <img src={message.senderId === currentUser.uid? currentUser.photoURL : data.user.photoURL } alt="" />
        {/* <span>Just now</span> */}
      </div>
      <div className="messageContaint">
        {message.text && <p>{message.text}</p>}
{message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message
