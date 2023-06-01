import React from "react";
import './About.css'

function About() {
  return (
    <div className="about">
      <div>
        <img src={require("../../Images/image_2.jpg")} className="img" alt="" />
      </div>
      <div className="content">
        <div className="mission">
          <p className="head">
            Don't squeeze in a sedan when you could relax in a van.
          </p>
          <p className="sub-head">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="sub-head">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="explore">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <button>Explore our vans</button>
        </div>
      </div>
    </div>
  );
}

export default About;
