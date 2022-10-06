import React from 'react'
import "./topbar.css"
import { NotificationsNone } from "@material-ui/icons";


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
                        <span className='topIconBagde'>2</span>

                    </div>
                </div>
            </div>
        </div>
    )
}


