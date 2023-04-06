import React from 'react'
import HomeCSS from "./Home.module.css"
import About from './About'
import Contatti from './Contatti'
import Services from "./Services"

const Home = () => {
  return (
    <>
    <div className={HomeCSS.home__background}>
      <div className={HomeCSS.titleContainer}>
        
        <h1 className={HomeCSS.site__title}>ALFREDO ESPOSITO</h1> 
        <h3 className={HomeCSS.site__subTitle}>AVVOCATO E CONSULENTE DI IMPRESE A NAPOLI</h3> 
      </div>
    </div>
    <Services />
    <About />
    <Contatti />
    </>
    )
  }
  

export default Home