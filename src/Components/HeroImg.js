import React from "react";
import "./HeroImg.css";
import Pen from "../Assests/4.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="pen-img" src={Pen} alt="laptop-pen" />
      </div>
      <div className="content">
        <p>HI, I'M CHANNAKESHAVA.</p>
        <h1>Python Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
