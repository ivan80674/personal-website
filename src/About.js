import React from 'react'
import AboutCSS from "./About.module.css"
import aboutAlfredo from "./aboutAlfredo.png"

const About = () => {
  return (
    <section id='About_id'>
        <h1 className={AboutCSS.aboutTitle}><span>ABOUT ME</span></h1>
        <div className={AboutCSS.container}>
          
          <div className ={AboutCSS.aPic}>
            <img   src={aboutAlfredo} alt="Alfredo-Esposito-Profile-Pic" />
          </div>
          
          <div className={AboutCSS.line}></div>
          

          <div className={AboutCSS.paragraph}>
            <h2>Avv. Alfredo Esposito</h2>
            <p>   
                Meet Alfredo Esposito - a highly skilled lawyer and entrepreneur with a diverse professional background and a strong focus on digital law.
                With over 12 years of experience in Copyright and Intellectual Property Law and over 5 years in Criminal Law, he is a trusted expert in his field.
                As a member of the Naples Bar Association and on the United Kingdom list of English speaking Italian solicitors, Alfredo is well-equipped to represent clients in first instance and appeal trials in Italy.
            </p>
          </div>
        </div>
    </section>
  )
}







export default About