import React from "react";
import "./Partners.css";

import microsoft from "../assets/microsoft.png";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import meta from "../assets/meta.png";
import aws from "../assets/aws .png";

import semrush from "../assets/semrush.png";
import ahrefs from "../assets/ahrefs.png";
import looker from "../assets/looker.png";
import webflow from "../assets/webflow.png";
import figma from "../assets/figma .png";
import shopify from "../assets/shopify.png";
import zapier from "../assets/zapier.png";

function Partners() {
  return (
    <>
      {/* TECHNOLOGY PARTNERS */}

      <section className="tech-partners">

        <h2>
          Our <span>Technology</span> Partners
        </h2>

        <div className="partners-grid">

          <div className="partner-card">
            <img src={microsoft} alt="Microsoft"/>
          </div>

          <div className="partner-card">
            <img src={apple} alt="Apple"/>
          </div>

          <div className="partner-card">
            <img src={google} alt="Google"/>
          </div>

          <div className="partner-card">
            <img src={meta} alt="Meta"/>
          </div>

          <div className="partner-card">
            <img src={aws} alt="Aws"/>
          </div>

        </div>

      </section>


      {/* TOOLS */}

      <section className="tools">

        <h2>Licensed + Partnered Tools</h2>

        <div className="tools-grid">

          <div className="tool-card"><img src={semrush} alt="Semrush"/></div>
          <div className="tool-card"><img src={ahrefs} alt="Ahrefs"/></div>
          <div className="tool-card"><img src={looker} alt="Looker"/></div>
          <div className="tool-card"><img src={meta} alt="Meta"/></div>

          <div className="tool-card"><img src={webflow} alt="Webflow"/></div>
          <div className="tool-card"><img src={figma} alt="Figma"/></div>
          <div className="tool-card"><img src={shopify} alt="Shopify"/></div>
          <div className="tool-card"><img src={zapier} alt="Zapier"/></div>

        </div>

      </section>
    </>
  );
}

export default Partners;