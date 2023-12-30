import "./AboutContent.css";
import React1 from "../Assests/react.jpg"

import mern from "../Assests/mern.jpg"
import { Link } from "react-router-dom";
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a Front-End Developer. I create creavity webproject solution for my client</p>
            <Link to="/contact"><button className="btn">Contact</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true" />
                </div>
                
                <div className="img-stack bottom">
                    <img src={mern} className="img" alt="true" />
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default AboutContent
