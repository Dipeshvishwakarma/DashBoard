import { Visibility } from '@mui/icons-material';
import React from 'react';
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className='widgetSm'>
    <span className="widgetSmTitle">New Join Member</span>
    <ul className="widgetSmList">
          <li className="widgetSmListItem">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="widgetSmImg" />
              
              <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="widgetSmImg" />
              
              <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Display
              </button>
          </li>
          <li className="widgetSmListItem">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" className="widgetSmImg" />
              
              <div className="widgetSmUser">
              <span className="widgetSmUsername">Anna Keller</span>
              <span className="widgetSmUserTitle">Software Engineer</span>
              </div>
              <button className="widgetSmButton">
                  <Visibility className='widgetSmIcon'/>
                  Display
              </button>
          </li>
    </ul>    
    </div>
  )
}

export default WidgetSm