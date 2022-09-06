import React from 'react'
import "../single/Single.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navabar"
import Chart from "../../components/Chart/Chart"
import Datatable from "../../components/Datatable/Datatable"
import TableView from '../../components/Table/TableView'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="single__container">
        <Navbar/>
        <div className='top'>
          <div className="left">
            <div className="edit__button">
              Edit
            </div>
            <h1 className="title">
              Information
            </h1>
            <div className='img__container'>
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80" alt="itemimg" className='item__image'/>
              <div className="details">
                <h1 className='item__title'>Merry Doe</h1>
                <div className="detail__item">
                  <span className="item__key">Email:</span>
                  <span className="item__value">user@gmail.com</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Phone:</span>
                  <span className="item__value">+12 1234 12 133</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Address:</span>
                  <span className="item__value">User Village Gali No User Distrct State Pincode</span>
                </div>
                <div className="detail__item">
                  <span className="item__key">Country:</span>
                  <span className="item__value">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1}  title="User Spending (Last 6 Months)"/>
          </div>
        </div>
        <div className='bottom'>
          <div className="title">
            Last Transaction
          </div>
          <TableView/>
        </div>
      </div>

    </div>
  )
}

export default Single