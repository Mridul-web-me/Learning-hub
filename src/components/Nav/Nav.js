import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <div className="container">
            
            
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/home"><span>L</span>Hub</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-0">
                      <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/services">Service</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                </nav> 
        </div>
    )
}

export default Nav
