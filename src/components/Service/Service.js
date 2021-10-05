import React from 'react'
import './Service.css'
function Service(props) {
    const {title, key, price, availability,country, img}  = props.service;
    return (
        <div>
            <h2>Title: {title}</h2>
            <h2>Country: {country} </h2>
            <img src={img}  width="30%" height="300px"/>
        </div>
    )
}

export default Service
