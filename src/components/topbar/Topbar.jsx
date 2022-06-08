import React from 'react';
import "./topbar.css";
import { Language, Notifications, Settings } from '@mui/icons-material';

function Topbar() {
  return (
    <div className='topbar'>
    <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
              <Notifications />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="topAvatar" />
        </div>
    </div>
    </div>
  )
}

export default Topbar