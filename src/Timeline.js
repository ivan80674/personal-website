import React from 'react'
import DataTimeline from './DataTimeline'
import TimelineCSS from './Timeline.module.css';
import TimelineItem from './TimelineItem';


const Timeline = () =>{ 
  return (
    <div className={TimelineCSS.timelineContainer}>
      {DataTimeline.map((data, indx) => 
        (<TimelineItem DataTimeline={data} key={indx} />)
      )}
    </div>
  ) 
}


export default Timeline