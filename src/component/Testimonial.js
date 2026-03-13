import React from "react";
import "./Testimonial.css";

import kalyan from "../assets/kalyan.png";

function Testimonial() {
  return (
    <section className="testimonial">

      <div className="testimonial-container">

        {/* LEFT */}

        <div className="testimonial-left">

          <h2>Our Testimonial</h2>

          <p className="subtitle">
            A SYMPHONY OF SATISFIED VOICES!
          </p>

        </div>


        {/* RIGHT */}

        <div className="testimonial-right">

          <div className="quote">“</div>

          <h3>Superb Work! Amazing Performance!</h3>

          <p className="description">
            Explore BO's behind-the-scenes impact when we lowered the CAC from
            INR 9,960 to INR 4,500 through strategic digital marketing.
          </p>

          <div className="client">

            <img src={kalyan} alt="Kalyan Jewellers"/>

            <div>
              <h4>Candere | Kalyan Jewellers</h4>
              <p>A Kalyan Jewellers Company</p>
            </div>

          </div>

          <div className="testimonial-nav">

            <span className="arrow">←</span>
            <span className="count">1 / 3</span>
            <span className="arrow">→</span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonial;