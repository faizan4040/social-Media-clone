import React from "react";
import './TrandCard.css'
import {TrandData} from '../../Data/TrandData.js'

const TrandCard =()=>{
    return(
        <div className="TrandCard">
            <h3> Trends for you</h3>
            {TrandData.map((trand)=>{
                return(
                    <div className="trand">
                        <span>#{trand.name}</span>
                        <span>{trand.shares}K Shares</span>
                    </div>
                )
            })}

        </div>
    )
}

export default TrandCard