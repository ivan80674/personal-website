import React from 'react'
import ServiceCardCSS from "./ServiceCard.module.css";

const ServiceCard = ({icon, Title, Description}) => {
  return (
    <div className={ServiceCardCSS.container}>
        <div className={ServiceCardCSS.icon}>
            {icon}
        </div>

        <h3 className={ServiceCardCSS.Title}>{Title}</h3>
        <div className={ServiceCardCSS.Description}>
            {Description}
        </div>
    </div>
  )
}

export default ServiceCard