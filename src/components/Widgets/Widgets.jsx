import { AccountBalanceWalletOutlined, KeyboardArrowUp, MonetizationOnOutlined, PersonOutlined,  ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import "../Widgets/widgets.scss"

const Widgets = ({type}) => {

  let data ;

  //temporary

  const amount = 100 ;
  const percentage = 20 ;

  switch(type){
    case "users" :
      data = {
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlined className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>
      };
      break;
      case "customers" :
      data = {
        title:"Customers",
        isMoney:false,
        link:"See all customers",
        icon:<ShoppingCartOutlined className='icon' style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)"}}/>
      };
      break;
      case "services" :
      data = {
        title:"Product/Services",
        isMoney:true,
        link:"View all products/services",
        icon:<MonetizationOnOutlined className='icon'style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)"}} />
      };
      break;
      case "comservices" :
      data = {
        title:"Comservice",
        isMoney:true,
        link:"See all comservices",
        icon:<AccountBalanceWalletOutlined className='icon' style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)"}}/>
      };
      break;
      default:
        break;
  }
  return (
    <div className='widget' >
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"}{amount}</span>
            <span className='link'>{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUp/>
                {percentage}
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets