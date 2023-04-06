import React from 'react'
import ContattiCSS from "./Contatti.module.css"
import Gmap from "./Gmap"
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contatti = () => {

  const form = useRef()
  const sendEmail = (e) => {
    
    e.preventDefault() 

    emailjs.sendForm('service_jmqrrfj', 'template_ts37pnc', form.current, 'hW4rY3VnF2K1yqoQX')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()
  };

 


  return (
    <section id='Contacts_id'>
      <h1 className={ContattiCSS.contactsTitle}>CONTACTS</h1>
      <div className={ContattiCSS.container}>  
      
        <form className={ContattiCSS.form} ref={form} onSubmit={sendEmail}>
          <h1 className={ContattiCSS.formTitle}>Write Here</h1>
          <input type="text" placeholder ="Full Name" name = "Name" required></input>
          <input type="email" placeholder ="Email" name = "Email" required></input>
          <textarea placeholder = "Type Message" name = "Message" required></textarea>
          <button type= "submit" className = {ContattiCSS.submit}>Send</button>

        </form>

        <Gmap />
      </div>
 

  
    </section>
  )
}

export default Contatti

