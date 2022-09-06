import React from 'react'
import Chart from '../../components/Chart/Chart'
import Featured from '../../components/Featured/Featured'
import Navabar from '../../components/Navbar/Navabar'
import Sidebar from '../../components/Sidebar/Sidebar'
import TableView from '../../components/Table/TableView'
import Widgets from '../../components/Widgets/Widgets'
import "../home/Home.scss"

const Home = () => {
  return (
    <div className='home' >
      <Sidebar/>
      <div className="home__container">
        <Navabar/>
        <div className="widgets">
            <Widgets type="users"/>
            <Widgets type="customers"/>
            <Widgets type="services"/> 
            <Widgets type="comservices"/>
            <Widgets type="invoices"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart aspect={2 / 1} title="Last Six Month (revenue)"/>
          
        </div>
        <div className='list__container'>
          <div className="list__title">
            Latest Transactions
          </div>
          <TableView/>
        </div>
      </div>
    </div>
  )
}

export default Home