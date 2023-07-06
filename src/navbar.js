//import 'React' from 'react'
import './App.css' 
import {useState} from 'react'
import YouTubeIcon from '@mui/icons-material/YouTube';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './sidebar';
export default function Navbar(props){
  const [open, setIsOpen]=useState(false);
 
    return(
        <div>
          <nav className='navbar'>
          <div className='icon'>
          <MenuIcon className='my-icon' onClick={()=>{setIsOpen(!open)}} style={{width:'130px',height:'40px'}}  />
          <YouTubeIcon className='yutube' onClick={props.close} style={{width:'130px',height:'40px', color:'red'}}/><span className='youtube'>Youtube</span>
          </div>
          <div className='box'>
          <div className='search-box'>
            <input type='search' placeholder='enter your search' className='search' id='search-input' name='search'></input><label><SearchOutlinedIcon className='search-icon'/></label><KeyboardVoiceOutlinedIcon className='keyboard'/>
            </div>
          </div>
          <div className='thirdNav'>
          <NotificationsIcon className='my-icon' style={{width:'80px',height:'30px'}}/>
          <CreateNewFolderIcon className='my-icon'style={{width:'80px',height:'30px'}}/>
          <PersonOutlineOutlinedIcon className='my-icon' sty={{width:'200px', height:'30px'}} />
          </div>
        </nav>
       <SideBar isOpen={open} setIsOpen={setIsOpen}/>
        </div>
    )
}