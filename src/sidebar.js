//import 'React' from 'react'
//import {NavLink} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined'
//import AddHomeIcon from '@mui/icons-material/AddHome';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined'
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';

import './App.css'
export default function SideBar({isOpen,setIsOpen}){
  function toggle(){
      setIsOpen(!isOpen);
  }
    const menuItem=[
        {
            icon:<HomeOutlinedIcon />,
            title:'Home'
        },
        {
    
            icon:<SubscriptionsOutlinedIcon />,
            title:'Subscription'
        },
        {
            icon:<VideoLibraryOutlinedIcon/>,
            title:'library'
        },
        {
            icon:<HistoryOutlinedIcon/>,
            title:'History'
        },
        {
            icon:<OndemandVideoOutlinedIcon/>,
            title:'Videos'
        },
        {
            icon:<WatchLaterOutlinedIcon/>,
            title:'look later'
        },
        {
            icon:<ThumbUpAltOutlinedIcon/>,
            title:'videos like'
        }
    ]
   
    return(
     
         <div className='container'>
          <div className='sidebar' style={{display:isOpen?'block':'none'}}>
            
            {
      menuItem.map((item,key)=>(
        <div className='item-icon' index={key}>{item.icon}   <span className='item-text' >{item.title}</span></div>
       ))
            }
          </div>  
         </div>
    )
}

