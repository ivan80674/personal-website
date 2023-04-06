import NavbarCSS from "./Navbar.module.css"
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState }  from 'react'

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () =>{ 
    setSidebar(!sidebar)
   }

  return (
    <>
    


    <nav  className =  {sidebar ? NavbarCSS.nav__mobile : NavbarCSS.nav__container }>
        <NavLink to="/Home" className = {NavbarCSS.site__title}>Alfredo Esposito</NavLink>
        <div>
            <i className={NavbarCSS.close__icon}><AiOutlineClose onClick={showSidebar} /></i>
        </div>
      <div>
        <i className={NavbarCSS.bars__icon}><FaBars onClick={showSidebar}/></i>
      </div>
        
        
        <ul>
          <Link to = "About_id" spy={true} smooth={true} offset={-100} duration={800}>ABOUT ME</Link>
          <NavLink to="/Galleria" >ACHIEVEMENTS</NavLink>
          <Link to = "Contacts_id" spy={true} smooth={true} offset={-100} duration={800}>CONTACTS</Link>
          
        
            
          
        </ul>
        
        
    </nav>
    </>    
  )
}



export default Navbar