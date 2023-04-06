import React from 'react'
import GalleriaCSS from "./Galleria.module.css"
import Timeline from "./Timeline"
import { motion } from "framer-motion";






const Galleria = () => {

  


  return (
    <motion.div
      initial= { {width: 0 } }
      animate= {{width: "100%" } }
      exit= { {x: window.innerWidth, transition: {duration: 0.5 }} }

    
      >
      <h1 className={GalleriaCSS.timelineTitle}><span>Professional Background</span></h1>
      <Timeline />

      
          
    </motion.div>      
  )
}






export default Galleria