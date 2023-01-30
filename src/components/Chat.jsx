import React, { useContext } from 'react'
import Cam from '../img/video-camera.png'
import Add from '../img/add-user.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'


const Chat = () => {
  const {data} =useContext(ChatContext)
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcon">
          <img style={{height:'17px',width:'17px'}} src={Cam} alt="" />
          <img style={{height:'17px',width:'17px'}} src={Add} alt="" />
          <img style={{height:'17px',width:'17px'}} src={More} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
      
      
    </div>
  )
}

export default Chat
