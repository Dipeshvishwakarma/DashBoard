import { BarChart, Feedback, Inventory, LineStyle, Mail, Message, MonetizationOn, Person, Report, Timeline, TrendingUp, Work } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to="/" className='link'> 
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                   
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <Link to="/users" className='link'>
                    <li className="sidebarListItem">
                        <Person className='sidebarIcon'/>
                        User
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                        <Inventory className='sidebarIcon'/>
                        Product
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                        <MonetizationOn className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon'/>
                        Reports
                    </li>
                   
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Mail className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Feedback className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <Message className='sidebarIcon'/>
                        Messages
                    </li>
                   
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <Work className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcon'/>
                        Reports
                    </li>
                   
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar