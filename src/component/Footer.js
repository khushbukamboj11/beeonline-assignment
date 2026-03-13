import React from "react";
import "./Footer.css";

import linkedin from "../assets/linkdin.png";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";

import check from "../assets/check.png";
import arrow from "../assets/arrow.png";
import location from "../assets/location.png";
import star from "../assets/star.png";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <section className="footer-wrapper">

      {/* CTA SECTION */}

      <div className="cta-box">

        <h2>Do you want truly impressive results?</h2>

        <p>
          Ready to elevate your online presence? Get in touch with us today
          for personalized solutions tailored to your business needs.
        </p>

        <div className="cta-points">

          <span>
            <img src={check} alt="" />
            60+ Team Members
          </span>

          <span>
            <img src={star} alt="" />
            Affordable Pricing Plan
          </span>

          <span>
            <img src={arrow} alt="" />
            Growth Oriented Strategies
          </span>

        </div>

        <button className="cta-btn">
          Book a Free Consultation
        </button>

       

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-grid">

          {/* ABOUT */}

          <div className="footer-about">

           <img src={logo} alt="BeeOnline Logo" className="footer-logo" />

            <p>
              Bee Online takes pride in being a valued partner,
              providing customized solutions designed to help
              you drive revenue and reach your goals.
            </p>

            <div className="social">

              <img src={linkedin} alt="linkedin"/>
              <img src={discord} alt="discord"/>
              <img src={twitter} alt="twitter"/>
              <img src={telegram} alt="telegram"/>
              <img src={facebook} alt="facebook"/>

            </div>

          </div>


          {/* COMPANY */}

          <div>

            <h3>Company</h3>

            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
            </ul>

          </div>


          {/* SUPPORT */}

          <div>

            <h3>Support</h3>

            <ul>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms Conditions</li>
            </ul>

          </div>


          {/* SUBSCRIBE */}

          <div>

            <h3>Subscribe Now</h3>

            <div className="subscribe">

              <input
                type="email"
                placeholder="Enter email address"
              />

              <button>
                <img src={arrow} alt="send"/>
              </button>

            </div>

            <label className="agree">

              <input type="checkbox" />

              by signing up, you agree to receive mail

            </label>

          </div>

        </div>


        {/* BOTTOM */}

        <div className="footer-bottom">

          <p>© Copyright 2024 Beeonline</p>

          <p className="address">
            <img src={location} alt="location"/>
            103,Quantum Tower, Off, Swami Vivekananda Rd,
            Malad West, Mumbai, Maharashtra 400064
          </p>

        </div>

      </footer>

    </section>
  );
}

export default Footer;