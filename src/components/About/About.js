import React from "react";
import './About.css'

const About = () => {
    
    return (
        <div className="about">
            <div className="container">
            <h5 className="text-center">ABOUT OUR SCHOOL</h5>
            <h2 className="text-center">We’re inspiring the next <b>generation</b> of the <b>brightest minds</b>. Dictumst quisque sagittis purus sit amet. </h2>
            <div className="about-content">
                <div className="row">
                    <div className="col-md-3">
                    <h3>Our Mission</h3>
                    <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                    <a href="#">LEARN MORE</a>
                    </div>
                    <div className="col-md-3">
                        <i className="fas fa-quote-left"></i>
                        <p>Luctus accumsan tortor posuere ac ut consequat. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Gravida in fermentum et sollicitudin ac orci. ​</p>
                    </div>
                    <div className="col-md-6">
                        <img src="img/about2.jpg" className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            <div className="our-teacher">
                <img src="img/about3.jpg" className="img-fluid" alt=""/>
                <div className="teacher-text">
                    <h2>Our Teachers</h2>
                    <p>Vivamus arcu felis bibendum ut tristi​que et. Habitant morbi tristique senectus et netus et malesuada fames. Sapien eget mi proin sed libero enim sed. </p>
                    <button>LEARN MORE</button>
                </div>
            </div>
            <div className="about-channels">
                <h3>ABOUT US</h3>
                <h1>Best Education Channels</h1>
            </div>

            <div className="program">
                <h1 className="text-center">New Programs</h1>
                <p className="text-center">Id diam vel quam elementum pulvinar etiam. Tellus molestie nunc non blandit massa enim. Iaculis nunc sed augue lacus. Tellus elementum sagittis vitae et leo duis ut diam quam. Massa enim nec dui nunc mattis enim ut tellus elementum. Justo donec enim diam vulputate ut pharetra.</p>
                <button>Learn more</button>
            </div>
            <div className="program-content">
                <div className="row">
                    <div className="col-md-6">
                        <img src="img/about4.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <h2 className="program-heading">Getting Education Became Easier</h2>
                        </div>
                        <div className="row program-text-content">
                            <div className="col-md-6">
                                <p>Malesuada pellentesque elit eget gravida. Elit pellentesque habitant morbi tristique senectus. In nisl nisi scelerisque eu ultrices.</p>
                                <a href=""><i className="fab fa-facebook-f"></i></a>
                                <a href=""><i className="fab fa-twitter"></i></a>
                                <a href=""><i className="fab fa-instagram"></i></a>
                                <a href=""><i className="fab fa-youtube"></i></a>
                            </div>
                            <div className="col-md-6">
                                <p><em>Malesuada pellentesque elit eget gravida. Elit pellentesque habitant morbi tristique senectus. In nisl nisi scelerisque eu ultrices.</em></p>
                                <button>LEARN MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-gallery">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card">
                        <img src="img/about1.jpg" className="card-img-top" alt="..."/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src="img/about2.jpg" className="card-img-top" alt="..."/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src="img/about3.jpg" className="card-img-top" alt="..."/>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card">
                        <img src='./img/about4.jpg' className="card-img-top" alt="..."/>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        </div>
    )
}

export default About;