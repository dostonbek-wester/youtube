import React, { useState } from "react";
import { Avatar,IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReactPlayer from 'react-player'
import {useNavigate} from "react-router-dom"
import './card.css'

const Card = ({items}) => {

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
    <div className="box" 
      onClick={ToDetail}
      
    >
      
    <img src={items?.snippet?.thumbnails?.high?.url} alt="" className="thubnail" /> 
      <div className="flex">
        <Avatar src={'avatar'} alt={items.snippet.channelTitle} />
        <div>
         <h2>{reduce_title(items.snippet.title)}</h2>
         <p>{items.snippet.channelTitle}</p>
         <p>{'3 years ago'}</p>
        </div>
        <IconButton>
           <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );

  
};

export default Card;
