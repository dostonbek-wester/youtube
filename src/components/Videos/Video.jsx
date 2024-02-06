import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/api";
import { KEY } from "../../constant/key";
import Card from "../Card/Card";
import { Button } from "@mui/material";
import CategoriesBtn from "../Category/Category";

const Video = () => {
  const [YoutubeData, setYoutubeData] = useState([])
  const [Categories, setCategories] = useState([])
  const [Category_ID, setCategory_ID] = useState('All')

  
  
  useEffect(()=>{
    get_videos()
    get_categories()
  },[])


  async function get_categories() {
      const res = await axios.get(`${BASE_URL}/videoCategories?part=snippet&regionCode=US&key=${KEY}`)
      console.log("cat",res)
      setCategories(res.data.items)
  }
 

  function get_videos(params) {
      axios.get(BASE_URL + `/search?part=snippet&type=video&key=${KEY}&maxResults=60`)
      .then((res)=>{
        setYoutubeData(res.data.items)
      })
  }

  function get_videos_by_cat_id(cat_id) {
    setCategory_ID(cat_id)
    axios.get(BASE_URL + `/search?part=snippet&videoCategoryId=${cat_id}&type=video&key=${KEY}&maxResults=50`)
    .then((res)=>{
      setYoutubeData(res.data.items)
    })
  }

  
 

  return (
    <>
      <div className="categories" style={{paddingLeft:29}}>
        <CategoriesBtn Category_ID={Category_ID} clicking={get_videos_by_cat_id} listdata={Categories} />
      </div>
      <div className="videos">
          {
            YoutubeData.map((item,index)=>(
              <Card key={index} items={item} />
            ))
          }
      </div>
    </>
  );
};

export default Video;
