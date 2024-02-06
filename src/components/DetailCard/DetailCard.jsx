import React, { useState } from "react";
import { Avatar,IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactPlayer from 'react-player'
import {useNavigate} from "react-router-dom"
import './DetailCard.css'

const DetailCard = ({items}) => {

  const [playing, setplaying] = useState(false)
  const navigate  = useNavigate()

  function ToDetail() {
    console.log("Salom",items.id.videoId)
    navigate(`/watch?v=${items.id.videoId}`,{state:items.id.videoId})
  }

  function reduce_title(title) {
      if(title.length>40){
        return title.slice(0,40) + "..."
      }else{
        return title
      }
  }
 

  return (
    <div className="boxx" 
      onClick={ToDetail}
      
    >
      
    <img src={items?.snippet?.thumbnails?.high?.url} alt="" className="thubnail" /> 
        <div>
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
         <h2 className="h2">{reduce_title(items.snippet.title)}</h2>
         <IconButton>
           <MoreVertIcon />
        </IconButton>
        </div>
      <div className="flex">
        
      <div className="f">
      <Avatar src={'avatar'} alt={items.snippet.channelTitle} />
         <p>{items.snippet.channelTitle}</p>
      </div>
      <div className="ff">
        
      <p>{'3 years ago'}</p>
      </div>
        </div>
        
      </div>
    </div>
    
  );

  
};

export default DetailCard;
