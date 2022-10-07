import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function topbar() {
    return (
        <div className='topbar'>
            <div className='topbarwrapper'>
                <div className='topleft'>
                    <span className='logo'>lamaadmim</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconsContainer'>
                        <NotificationsNone />
                        <span className='topIconsBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        < Language />
                        <span className='topIconsBagde'>2</span>
                    </div>
                    <div className='topbarIconsContainer'>
                        <Settings />
                    </div>
                    <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}












