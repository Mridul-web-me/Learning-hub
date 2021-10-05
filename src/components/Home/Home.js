import React from 'react'
import './Home.css'
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#"><span>L</span>Hub</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-0">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Service</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </nav>

              <div className="banner">
                  <div className="banner-content">
                    <img src="img/baner.jpg" alt=""/>
                    <div className="bgShape">
                  </div>
                  <div className="text-content">
                      <h1>Welcome!</h1>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                      <button>Learn More</button>
                  </div>
              </div>
        </div>
    </div>
    </div>
  )
}

export default Home;
