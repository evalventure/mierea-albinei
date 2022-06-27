import s from "./Footer.module.css";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <section className={s.footerSection}>
      <div className={s.footerContainer}>
        <div className={s.followContainer}>
          <h3>Follow</h3>
          <a href="https://instagram.com" className={s.instagram}>
            <GrInstagram />
            Instagram
          </a>
          <a href="https://facebook.com" className={s.facebook}>
            <FaFacebookF />
            Facebook
          </a>
        </div>
        <div className={s.contactContainer}>
          <h3>Contact</h3>
          <a href="tel:+40747788940" className={s.phoneNumber}>
            +40747788940
          </a>
          <a href="mailto:catrina.andrei93@yahoo.com" className={s.mailAddress}>
            bakery@gmail.com
          </a>
        </div>
        <div className={s.addressContainer}>
          <h3>Bakery</h3>
          <p>Strada Primaverii</p>
        </div>
        <div className={s.findUsContainer}>
          <h3>Find Us</h3>
          <a href="https://googlemaps.com" className={s.googleMaps}>
            Open location in Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
