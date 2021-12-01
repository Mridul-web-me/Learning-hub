import React from 'react'
import "./Banner.css"
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-content">
                    <img src="img/baner.jpg" alt="" />
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
    )
}

export default Banner
