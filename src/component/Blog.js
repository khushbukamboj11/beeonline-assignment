import React from "react";
import "./Blog.css";

import blog1 from "../assets/blog-1.png";
import blog2 from "../assets/blog-2.png";
import blog3 from "../assets/blog-3.png";

function Blog() {
  return (
    <section className="blog">

      {/* HEADER */}

      <div className="blog-header">

        <h2>Our Latest Blog and News</h2>

        <div className="blog-right">

          <p>
            Delve into real-world examples where our Technology
            Solutions, Consulting and Strategy.
          </p>

          <div className="blog-arrows">
            <span>←</span>
            <span>→</span>
          </div>

        </div>

      </div>


      {/* BLOG CARDS */}

      <div className="blog-grid">

        {/* CARD 1 */}

        <div className="blog-card">

          <div className="blog-img">

            <img src={blog1} alt="Blog 1" />

          

          </div>

          <h3>
            The One Part of the Vision Pro That Apple
            Doesn't Want You to See
          </h3>

         <button className="read-more">Read More →</button>

        </div>


        {/* CARD 2 */}

        <div className="blog-card">

          <div className="blog-img">

            <img src={blog2} alt="Blog 2" />

            

          </div>

          <h3>
            Intel’s CEO Says AI Is the Key to the
            Company’s Comeback
          </h3>

         <button className="read-more">Read More →</button>

        </div>


        {/* CARD 3 */}

        <div className="blog-card">

          <div className="blog-img">

            <img src={blog3} alt="Blog 3" />

            

          </div>

          <h3>
            Polar ID Is the Face ID Rival for
            Android Phones.
          </h3>

          <button className="read-more">Read More →</button>

        </div>

      </div>

    </section>
  );
}

export default Blog;