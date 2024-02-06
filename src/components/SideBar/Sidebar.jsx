import { Home,VideoLibrary,Subscriptions } from '@mui/icons-material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import HistoryIcon from '@mui/icons-material/History';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Button } from '@mui/material'
import React from 'react'
import './sidebar.css'
const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      
      <Button className='linkbtn btn' startIcon={<Home />}> Главная</Button>
      <Button className='linkbtn' startIcon={<VideoLibrary />}> Shorts</Button>
      <Button className='linkbtn' startIcon={<Subscriptions />}> Подписки</Button>
      <hr />
      <h1>Вы </h1>
      <Button className='linkbtn' startIcon={<AccountBoxIcon />}> Мои канал</Button>
      <Button className='linkbtn' startIcon={<HistoryIcon />}> История</Button>
      <Button className='linkbtn' startIcon={<PlayCircleOutlineIcon />}> Ваши видео</Button>
      <Button className='linkbtn' startIcon={<AccessTimeIcon />}> Смотреть позже</Button>
      <Button className='linkbtn' startIcon={<ThumbUpOffAltIcon />}> Понравившиеся</Button>
      <hr />
      <h1>Подписки</h1> 
      <Button className='linkbtn' startIcon={<ControlPointIcon />}> Каталог каналов</Button>

    </div>
  )
}

export default Sidebar