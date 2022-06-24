import s from "./LandingSection.module.css";
import { GrLocation } from "react-icons/gr";
import { MdSlowMotionVideo } from "react-icons/md";

import React from "react";

const LandingSection = () => {
  return (
    <section className={s.landingSection}>
      <div className={s.textContainer}>
        <h1>Traditional Artisan Bakery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className={s.buttonContainer}>
        <button>Shop Now</button>
      </div>
      <div className={s.locationContainer}>
        <a href="https://https://www.google.ro/maps" className={s.location}>
          <GrLocation />
          Strada Primaverii
        </a>
        <div className={s.seeMoreContainer}>
          <a href="#" className={s.seeMore}>
            See how we make it
          </a>
          <a href="">
            <MdSlowMotionVideo />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
