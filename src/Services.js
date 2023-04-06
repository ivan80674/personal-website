import React from 'react'
import  ServicesCSS  from "./Services.module.css";
import { GiHandcuffs } from "react-icons/gi";
import { FaRegCopyright,FaHandshake } from "react-icons/fa";
import { IoFingerPrint } from "react-icons/io5";
import { TbWriting } from "react-icons/tb";
import ServiceCard from './ServiceCard';


const About = () => {
  return (
    <section className={ServicesCSS.container}>
      <div >
        
          <div className={ServicesCSS.heading}>
            <h1>SPECIALIZED AREA</h1>
          </div>
          <div className={ServicesCSS.spArea}>
            <ServiceCard
              icon = {<GiHandcuffs />}
              Title = "Criminal Law"
              Description ="Criminal prescribes conduct perceveid as threatening, harmful, or otherwise endangering to the property, health, safety, and moral welfare of people inclusive of one's self."

            />
            <ServiceCard
              icon = {<FaRegCopyright />}
              Title = "Copyright Law"
              Description ="IP advice on a national and international level in particular regarding Copyright issues. "

            />
            
            <ServiceCard
              icon = {<FaHandshake />}
              Title = "Business Consultant"
              Description ="Blockchain, NFT and more Legal-Tech and business advice for Startup and mid-size companies."

            />
            <ServiceCard
              icon = {<IoFingerPrint />}
              Title = "Defensive Investigation"
              Description ="Investigative activities carried out by the lawyer to search and identify evidence in favor of his client."

            />
            <ServiceCard
              icon = {<TbWriting/>}
              Title = "Out-Of-Court Negotiations"
              Description =" Parties discuss in agreement to resolve a dispute outsideof court."

            />
            
              
            
            
          </div>
        
      </div>
    </section>
  )
}




export default About