import React from 'react';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import AppShortcutOutlinedIcon from '@mui/icons-material/AppShortcutOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
export default function Dashboard(){
    return(
        <div className='dashboard'>
            <div className='home'><HomeOutlinedIcon className='icondash'/><br/>
            <span>Home</span>
            </div>
            <div className='shorts'>
                <AppShortcutOutlinedIcon className='icondash'/><br/><span>Shorts</span>
            </div>
            <div className='subscription'><SubscriptionsOutlinedIcon className='icondash'/><br/><span>Subscription</span></div>
            <div className='library'><VideoLibraryOutlinedIcon className='icondash'/><br/><span>Library</span></div>
        </div>
    )
}