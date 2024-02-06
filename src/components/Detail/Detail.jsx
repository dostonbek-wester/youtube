import { Avatar } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../../api/api'
import { KEY } from '../../constant/key'
import './detail.css'

const Detail = () => {
  const location = useLocation()
  const [videoData, setvideoData] = useState({})


  useEffect(()=>{
    get_video_detail()
    get_recomended()
  },[])


  async function get_video_detail() {
    let res = await axios.get(BASE_URL + `/videos?part=snippet,contentDetails&id=${location.state}&key=${KEY}`)
    console.log(res.data.items[0].snippet)
    setvideoData(res.data.items[0].snippet)
  }

  async function get_recomended() {
    const res = await axios.get(BASE_URL + `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${location.state}&key=${KEY}`)
    console.log(res.data.items[0])
  }

  console.log(location)
  return (
    <div className='video-detail'>
        <div className='video-div'>
          <ReactPlayer  controls width={"100%"} height={'100%'} url={`https://www.youtube.com/watch?v=${location.state}`}   />

        </div>
        <h2 className='des'>{videoData.title}</h2>
        <div style={{display:"flex"}} className='chanel'>
            <Avatar src={''}  alt={'channelTitle'}/> 
            <h1 className='chanelName'>{videoData.channelTitle}</h1>
            <p className='follow'>Subcrise</p>
        </div>
        <p >{videoData.description}</p>
    </div>
  )
  // console.log("video" , videoData.channelTitle)
}

export default Detail