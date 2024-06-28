import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="banner">
        <h1>Volunteers</h1>
        <h3>Needed</h3>
        <p>
         We are always in need of passionate and dedicated volunteers to join our cause. Your time, skills, and enthusiasm can make a real difference in the lives of those we serve. Whether you can contribute a few hours a week or participate in larger projects, your support is invaluable. Join us in creating positive change and become a vital part of our mission to uplift communities and improve lives. Together, we can achieve more.
        </p>
        <Link to={"/donate"} className="btn">
          Donate Now
        </Link>
      </div>
      <div className="banner">
        <img src="/hero.png" alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
