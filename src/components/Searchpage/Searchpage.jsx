import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../../api/api'
import { KEY } from '../../constant/key'
import axios from 'axios'
import DetailCard from '../DetailCard/DetailCard'
import Sidebar from '../SideBar/Sidebar'

function Searchpage() {
  const location = useLocation()
  const [Data, setData] = useState([])

  console.log(location.state)


  useEffect(()=>{
    get_videos_by_cat_id()
  },[location.state])


  function get_videos_by_cat_id() {
    axios.get(BASE_URL + `/search?part=snippet&q=${location.state}&type=video&key=${KEY}&maxResults=50`)
    .then((res)=>{
      console.log(res)
      setData(res.data.items)
    })
  }



  return (
    <div className='big-box' style={{display:"flex", gap: "20px"}}>
      <Sidebar />
       <div>
       {Data.map((item,index)=>(
          <DetailCard key={index} items={item}/>
        ))}
       </div>
    </div>
  )
}

export default Searchpage