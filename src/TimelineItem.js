import React from 'react'
import TimelineItemCSS from "./TimelineItem.module.css"
import { BsAwardFill } from "react-icons/bs";


const TimelineItem = ({DataTimeline}) => (
  
        <div className={TimelineItemCSS.item}>
            <div className={TimelineItemCSS.content}>
                <time>
                    {DataTimeline.date}
                </time>
                <h2>
                    {DataTimeline.title}
                </h2>
                <img src={DataTimeline.photo} alt="Subcava" />
                <p>
                    {DataTimeline.text}
                </p>
                <span className={TimelineItemCSS.circle}><BsAwardFill /> </span>
            </div>
        </div>
  
  
  
);




export default TimelineItem