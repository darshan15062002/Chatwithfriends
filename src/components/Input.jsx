import React, { useContext, useState } from 'react'
import Attach from '../img/attachment.png'
import Img from '../img/gallery.png'
import {AuthContext} from '../context/AuthContext'
import {ChatContext} from '../context/ChatContext'
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore'
import { v4 as uuid} from 'uuid'
import { db, storage } from '../firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Input = () => {
  const [text ,setText]=useState('')
  const [image,setImage]=useState(null)

  const{currentUser}=useContext(AuthContext)
  const {data} =useContext(ChatContext)

  const handleSend = async ()=>{
console.log(currentUser);

if (image) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, image).then(()=> {
        getDownloadURL(storageRef).then(async (downloadURL) => {
      try{
          await updateDoc(doc(db,"chats", data.chatId), {
            messages: arrayUnion({
              id: uuid(),
              text,
              senderId: currentUser.uid,
              date: Timestamp.now(),
              img: downloadURL,
            })
        })
      }
        catch{
          console.log('error');
        }
      })
    })
  }
else{
  await updateDoc(doc(db,'chats',data.chatId),{
    messages: arrayUnion({
      id:uuid(),
      text,
      senderId:currentUser.uid,
    date:Timestamp.now()
     })
  })
}

await updateDoc(doc(db, "userChats", currentUser.uid), {
  [data.chatId + ".lastMessage"]: {
    text,
  },
  [data.chatId + ".date"]: serverTimestamp(),
});

await updateDoc(doc(db, "userChats", data.user.uid), {
  [data.chatId + ".lastMessage"]: {
    text,
  },
  [data.chatId + ".date"]: serverTimestamp(),
});

setText("");
setImage(null);
};
  return (
    <div className='input'>
      <input type="text" value={text} placeholder='Type somthing...' onChange={(e)=>setText(e.target.value)}/>
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" id='file' style={{display:'none'}} onChange={(e)=>setImage(e.target.files[0])} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input
