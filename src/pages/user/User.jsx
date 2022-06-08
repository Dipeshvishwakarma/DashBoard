import { CalendarMonth, CalendarViewDaySharp, LocationSearching, Mail, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material';
import React from 'react';
import { Link } from 'react-router-dom';
import "./user.css";

const User = () => {
  return (
    <div className='user'>
        <div className="userTitleContainer">
           <h1 className="userTitle">Edit User</h1>
           <Link to="/newUser">
           <button className="userAddButton">Create</button>
           </Link>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="userShowImg" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
                <span className="userShowUserTitle">Software Engineer</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
              <PermIdentity className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
              <CalendarMonth className='userShowIcon'/>
              <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
              <Mail className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form  className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label >Username</label>
                  <input type="text" placeholder='annabeck99' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label >Full Name</label>
                  <input type="text" placeholder='Anna Becker' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label >Email</label>
                  <input type="text" placeholder='annabeck99@gmail.com' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label >Phone</label>
                  <input type="text" placeholder='+1 123 456 67' className='userUpdateInput' />
                </div>
                <div className="userUpdateItem">
                  <label >Address</label>
                  <input type="text" placeholder='New York | USA' className='userUpdateInput' />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className="userUpdateImg" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                   <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                   <input type="file"  id="file" style={{display:"none"}}/>
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default User