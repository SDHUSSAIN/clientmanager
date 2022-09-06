import React from 'react'
import "./featured.scss"
import { MoreVert,KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import {CircularProgressbar} from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVert fontSize='20px'/>
        </div>
        <div className="bottom">
            <div className="featured__chart">
                <CircularProgressbar value={70} text="70%" strokeWidth={4}/>
            </div>

            <p className="title">Total Sales</p>
            <p className="amount">$420</p>
            <p className="desc">Previous transactions. Last transactions may not be inculuded</p>
            <div className="summary">
                <div className="item__container">
                    <div className="item__title">Target</div>              
                    <div className="item__result positive">
                        <KeyboardArrowUp/>
                        <div className="result__amount">$12.4k</div>
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__title">Last Week</div>              
                    <div className="item__result negative">
                        <KeyboardArrowDown/>
                        <div className="result__amount">$12.4k</div>
                    </div>
                </div>
                <div className="item__container">
                    <div className="item__title">Last Month</div>              
                    <div className="item__result negative">
                        <KeyboardArrowDown/>
                        <div className="result__amount ">$12.4k</div>
                    </div>
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Featured