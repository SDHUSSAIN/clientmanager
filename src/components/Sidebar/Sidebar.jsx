import React from 'react'
import {Link} from "react-router-dom"
import "../Sidebar/sidebar.scss"
import {Dashboard,PersonOutline,AccountCircle,Logout, AddBusiness,Psychology,LocalShipping,Assessment,SettingsSystemDaydream,Settings, NotificationsOutlined, CreditCard} from "@mui/icons-material"
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <Link to="/" style={{textDecoration:"none"}}>
                
                    <span className="logo">CMS</span>
                
            </Link>
        </div>
        
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <Dashboard className='icon' />
                    <Link to="/" style={{textDecoration:"none"}}>
                        
                        <span>Dashboard</span>
                        
                    </Link>                 
                </li>
                <li>
                    <PersonOutline className='icon' />
                    <Link to="/users" style={{textDecoration:"none"}}>
                        
                            <span>Users</span>
                        
                    </Link>   
                    
                </li>
                <li>
                    <AddBusiness className='icon' />
                    <Link to="/products" style={{textDecoration:"none"}}>
                        
                            <span>Products</span>
                        
                    </Link>  
                    
                </li>
                <li>
                    <CreditCard className='icon' />
                    <Link to="/customers" style={{textDecoration:"none"}}>
                        
                            <span>Customer</span>
                        
                    </Link>  
                    
                    
                </li>
                <li>
                    <LocalShipping className='icon' />
                    <Link to="/comservices" style={{textDecoration:"none"}}>
                        
                    <span>Comservice</span>
                        
                    </Link> 
                    
                </li>
                <li>
                    <LocalShipping className='icon' />
                    <Link to="/invoices" style={{textDecoration:"none"}}>
                        
                    <span>Invoice</span>
                        
                    </Link> 
                    
                </li>
                <p className="title">Reports</p>
                <li>
                    <NotificationsOutlined className='icon' />
                    <span>Notifications</span>
                </li>
                
                <li>
                    <Assessment className='icon' />
                    <span>Stats</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydream className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <Psychology className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <Settings className='icon' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <AccountCircle className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <Logout className='icon' />
                    <Link to="/login" style={{textDecoration:"none"}}>
                        <span>Log Out</span>
                    </Link>  
                    
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="color__option"></div>
            <div className="color__option"></div>
            <div className="color__option"></div>
        </div>
    </div>
  )
}

export default Sidebar