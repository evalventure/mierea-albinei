import s from "./LandingSection.module.css";
import { GrLocation } from "react-icons/gr";
import { MdSlowMotionVideo } from "react-icons/md";
import prajitura4 from "../../images/prajitura4.png";

import React from "react";

const LandingSection = () => {
  return (
    <section className={s.landingSection}>
      <div className={s.landingContainer}>
        <div className={s.textContainer}>
          <h1>Traditional Artisan Bakery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={s.buttonContainer}>
            <button>Shop Now</button>
          </div>
        </div>

        <div className={s.locationContainer}>
          <div className={s.addressContainer}>
            <a href="https://https://www.google.ro/maps" className={s.location}>
              <GrLocation />
              Strada Primaverii
            </a>
          </div>
          <div className={s.seeMoreContainer}>
            <a href="#" className={s.seeMore}>
              <p>See how we make it</p>
              <MdSlowMotionVideo />
            </a>
          </div>
        </div>
        <div className={s.landingPictureDiv}>
          <img src={prajitura4} alt="platou prajituri" className={s.cakePic} />
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
