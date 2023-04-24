import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'

const Chats = () => {
  const [chats ,setChats]=useState([])
  const {currentUser} =useContext(AuthContext)
  const {dispatch} =useContext(ChatContext)

  useEffect(()=>{
    const getChat =()=>{    
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
      setChats(doc.data()) 
     });

     return ()=>{
    unsub()
  }
    }
     currentUser.uid && getChat()
 
  },[currentUser.uid])

  const handleSelect =(u)=>{
    dispatch({type:'CHANGE_USER',payload:u})
    
  }


  return (
    <div className='chats'>
      {Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((item)=>{
        return <div className="userChat" key={item[0]} onClick={()=>handleSelect(item[1].userInfo)}>
        <img src={item[1].userInfo?.photoURL} alt="" />
        <div className="userInfo">
          <span>{item[1].userInfo?.displayName}</span>
          <p>{item[1].lastMessage?.text}</p>
        </div>
      </div>})}
      
     
    </div>
  )
}

export default Chats
