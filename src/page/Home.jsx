import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className="homeWrapper">
        <Sidebar/>
        <Chat/>
        
       

      </div>
      
    </div>
  )
}

export default Home
