import { ChatBubbleOutlined, ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListOutlined, NotificationAddOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material'
import React from 'react'
import "../Navbar/navbar.scss"

const Navabar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__wrapper">
        <div className="navbar__search">
            <input type="text" placeholder='Search here....' />
            <SearchOutlined  className='navbar__icon' />
        </div>
        <div className="navbar__items">
          <div className="navbar__item">
              <LanguageOutlined className='navbar__icon'  />
              English
          </div>
          <div className="navbar__item">
            <DarkModeOutlined className='navbar__icon' />
          </div>
          <div className="navbar__item">
            <FullscreenExitOutlined className='navbar__icon' />
          </div>
          <div className="navbar__item">
            <NotificationsNoneOutlined className='navbar__icon' />
            <div className="counter">1</div>
          </div>
          <div className="navbar__item">
            <ChatBubbleOutlineOutlined className='navbar__icon' />
            <div className="counter">1</div>
          </div>
          <div className="navbar__item">
            <ListOutlined className='navbar__icon' />
          </div>
          <div className="navbar__item">
            <img src="https://lenstax.com/auth/app-assets/images/profile/user-uploads/user-04.jpg" alt="" className='navbar__avatar' />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navabar