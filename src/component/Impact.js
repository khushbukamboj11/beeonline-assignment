import React from "react";
import "./Impact.css";

import traffic from "../assets/image-1.png";
import lead from "../assets/image-2.png";
import cost from "../assets/image-3.png";
import conversion from "../assets/image-4.png";
import engagement from "../assets/image-5.png";

function Impact() {
  return (
    <section className="impact">

      {/* HEADER */}

      <div className="impact-header">

        <div>
          <h2>
            Impact On Clients
            <span className="underline"></span>
          </h2>
        </div>

        <p className="impact-subtext">
          Your Growth. Your KPIs. Our Commitment.
        </p>

      </div>


      {/* CARDS */}

      <div className="impact-cards">

        <div className="impact-card">
          <img src={traffic} alt="Traffic Growth" />
          <div className="impact-content">
            <span className="dot"></span>
            <h3>Traffic Growth</h3>
          </div>
        </div>


        <div className="impact-card">
          <img src={lead} alt="Lead Quality" />
          <div className="impact-content">
            <span className="dot"></span>
            <h3>Lead quality</h3>
          </div>
        </div>


        <div className="impact-card">
          <img src={cost} alt="Cost Per Acquisition" />
          <div className="impact-content">
            <span className="dot"></span>
            <h3>Cost per acquisition</h3>
          </div>
        </div>


        <div className="impact-card">
          <img src={conversion} alt="Conversion Rate" />
          <div className="impact-content">
            <span className="dot"></span>
            <h3>Conversion rate improvement</h3>
          </div>
        </div>


        <div className="impact-card">
          <img src={engagement} alt="Customer Engagement" />
          <div className="impact-content">
            <span className="dot"></span>
            <h3>Customer engagement</h3>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Impact;