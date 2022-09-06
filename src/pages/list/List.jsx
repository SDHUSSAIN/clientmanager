import React from 'react'
import {Link} from "react-router-dom"
import "../list/List.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navabar"
import Datatable from '../../components/Datatable/Datatable'
const List = ({link}) => {

  

  return (
    <div className='list'>
      <Sidebar/>
      <div className="list__container">
        <Navbar/>
        <div className="button__container">
          <Link to = {link}>
            <button className='add__button'>Add New</button>
          </Link>
        </div>
        <Datatable/>
      </div>
    </div>
  )
}

export default List