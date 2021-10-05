import React, { useState, useEffect } from 'react'
 import './Services.css'

import Service from '../Service/Service'
const Services = () => {

        const [services, setServices] = useState([]);
        useEffect(() => {
            fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data)) 
            
        }, [])
    
    
    
    return (
        <div>
           <h3>services :{services.length}</h3>
            <div className="service-container">
             {
               services.map(service => <Service key={service.key}
               service={service}
               > </Service>)
           }
            </div>
        </div>
    )
}

export default Services;
