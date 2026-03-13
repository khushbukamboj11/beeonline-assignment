import React from "react";
import "./Hero.css";
import bg from "../assets/Hero.jpg";
import clients from "../assets/Frame 64.png";

function Hero() {
  return (
    <div>

      <section className="hero" style={{ backgroundImage: `url(${bg})` }}>
        <div className="hero-content">

          <p className="tagline">YOUR VISION, OUR EXPERTISE!</p>

          <h1>
            Award-Winning Digital <br/>
            Marketing Agency for <br/>
            High-Growth Brands
          </h1>

          <p className="description">
            We help brands in speeding up their growth through strategic marketing,
            brand experiences that are powerful and focused on performance execution.Our solutions are designed to deliver real, measurable ROI as we build like driving trafic, improving conversions and creating digital assets.
          </p>

          <button className="hero-btn">
            Get A Free Quote →
          </button>

        </div>
      </section>

      <div className="clients">
        <img src={clients} alt="clients" />
      </div>

    </div>
  );
}

export default Hero;