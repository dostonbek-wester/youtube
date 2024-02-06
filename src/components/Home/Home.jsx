import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Videos from '../Videos/Video'

const Home = () => {
  return (
    <div className='hero-container'>
        <div className="sidebar-container">
            <Sidebar />
        </div>
        <div className='cards-container'>
            <Videos  />
        </div>
    </div>
  )
}

export default Home