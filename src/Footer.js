import React from 'react'
import FooterCSS from "./Footer.module.css"
import { WhatsappIcon, WhatsappShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon,TelegramShareButton } from "react-share";

const Footer = () => {
  return (
    <footer>
     <div className={FooterCSS.footerCol}>
      <h4>Social Links</h4>
        <div  className={FooterCSS.socialLinks}>
          <ul  className={FooterCSS.footerUl}>
            <li>
              <WhatsappShareButton
              url='https://wa.me/+393515405209'>
                <WhatsappIcon round={true} logoFillColor= "white" size={20} />

              </WhatsappShareButton>
            </li>

            <li>
              <FacebookShareButton
              url='https://fb.me/dilafernando'>
                <FacebookIcon round={true} logoFillColor= "white" size={20} />

              </FacebookShareButton>
            </li>

            <li>
              <LinkedinShareButton
              url='https://it.linkedin.com/in/marco-onnembo-7b4ba7143/en'>
                <LinkedinIcon round={true} logoFillColor= "white" size={20} />

              </LinkedinShareButton>
            </li>

            <li>
              <TelegramShareButton
              url='https://telegram.org'>
                <TelegramIcon round={true} logoFillColor= "white" size={20} />

              </TelegramShareButton>

              
            </li>
          

          </ul>
        </div>
        

      </div>
      <div className={FooterCSS.Footer__Copyright}>
          <p>
            &copy;2022 ALFREDO ESPOSITO INC | All rights reserved | Terms of Service | Privacy
          </p>
      </div>
    
      
    </footer>
  )
}


export default Footer