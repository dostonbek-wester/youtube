import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeLogo from './../../assets/youtube.png'
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import "./style.css"
const Navbar = () => {
  const [search_value, setsearch_value] = useState('');
  const navigate = useNavigate()



  function ToResult(e) {
    if(e.key === "Enter"){
      console.log(search_value)
      navigate('/search',{state:search_value})
    }
  }

  return (
    <div className='navbar-container'>
      <div className='left'>
        <MenuIcon className='MenuIcon'/>
        <img src={YouTubeLogo}  className='YTL'/>
      </div>
      <div className='middle'>
        <div className='middle-div'>
          <input type="text" placeholder='Search' onKeyUp={(e)=>ToResult(e)} onChange={(e)=>setsearch_value(e.target.value)}  />
          <KeyboardIcon className='Key'/>
          <SearchIcon className='search' />
          
          

        </div>
        <KeyboardVoiceIcon className='voice'/>
      </div>
      <div className='right'>
        <VideoCallIcon className='video'/>
        <NotificationsNoneIcon  className='ring'/>
        <p>N</p>
      </div>
    </div>
  )
}

export default Navbar