import React from "react";
import "./Services.css";

import seoIcon from "../assets/seo.png";
import marketingIcon from "../assets/marketing.png";
import websiteIcon from "../assets/development.png";
import maintenanceIcon from "../assets/maintenance.png";
import uiuxIcon from "../assets/ui-ux.png";

function Services() {
  return (
    <section className="services">

      <div className="services-grid">

        {/* TEXT */}

        <div className="services-text">
          <h2>
            What We Offer
            <span className="underline"></span>
          </h2>

          <p>
            Bee Online delivers tailored digital marketing, MLM strategies,
            website development and AI/ML-driven campaigns for your business.
          </p>

          <button className="talk-btn">Let's Talk ↗</button>
        </div>


        {/* SEO */}

        <div className="card yellow">

          <div className="card-header">
            <img src={seoIcon} alt="SEO" className="icon"/>
            <h3>SEO</h3>
          </div>

          <p>
            We improve your website's ranking, increase organic traffic, and build long-term visibility through technical excellence, strategic content, and continuous optimization.
          </p>

          <span>Learn More →</span>

        </div>


        {/* PERFORMANCE */}

        <div className="card">

          <div className="card-header">
            <img src={marketingIcon} alt="Performance" className="icon"/>
            <h3>Performance Marketing</h3>
          </div>

          <p>
            Our team increases your ROI by creating results-based paid advertising campaigns on Google, Meta, and other platforms.
          </p>

          <span>Learn More →</span>

        </div>


        {/* WEBSITE */}

        <div className="card">

          <div className="card-header">
            <img src={websiteIcon} alt="Website" className="icon"/>
            <h3>Website Development</h3>
          </div>

          <p>
            At Bee Online, we offer customised website development options that are suitable for your business needs, goals and many more.
          </p>

          <span>Learn More →</span>

        </div>


        {/* MAINTENANCE */}

        <div className="card">

          <div className="card-header">
            <img src={maintenanceIcon} alt="Maintenance" className="icon"/>
            <h3>Website Maintenance</h3>
          </div>

          <p>
            We take care of security updates, backups, monitoring, and fixes in order to maintain your online presence that operates without interruption at all 24/7
          </p>

          <span>Learn More →</span>

        </div>


        {/* UIUX */}

        <div className="card">

          <div className="card-header">
            <img src={uiuxIcon} alt="UIUX" className="icon"/>
            <h3>UI/UX Design</h3>
          </div>

          <p>
            We deliver user-centered design that transforms customer journeys, improves engagement, and improves conversion rates across your entire digital ecosystem
          </p>

          <span>Learn More →</span>

        </div>

      </div>

    </section>
  );
}

export default Services;