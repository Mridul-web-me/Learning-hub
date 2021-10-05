import React from 'react'
import './Service.css'
import Button from '@restart/ui/esm/Button';
function Service(props) {
    const {title, price, availability,country, img}  = props.service;
    const serviceStyle ={
        border: '3px solid #db545a',
        padding: '10px',
        borderRadius: '10px',
        margin: '5px',
        height: '550px'
    }
    return (
        <div className="container">
            <div className="service" style= {serviceStyle}>
            <img src={img} />
            <h2>Title: {title}</h2>
            <p>Availablity: {availability}</p>
            <h2>Country: {country} </h2>
            <p>Price: {price}</p>
            
        </div>
        <Button>Buy Now</Button>
        </div>
    )
}

export default Service
