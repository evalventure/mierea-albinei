import React from "react";
import s from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  function menuClick() {
    // return document.addEventListener("click", () => {
    //   document.getElementById("#hamburgerMenu").style.display = "none";
    //   document.getElementById("#tel").style.display = "block";
    //   document.getElementById("#about").style.display = "block";
    //   document.getElementById("#delivery").style.display = "block";
    //   document.getElementById("#locations").style.display = "block";
    //   document.getElementById("#contact").style.display = "block";
    // });

    if (showMenu === false) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  return (
    <header>
      <section className={s.headerSection}>
        <div className={s.containerHeader}>
          <div onClick={menuClick} className={s.hamburgerMenu}>
            <AiOutlineMenu />
          </div>

          <a href="tel:+40747788940" id="#tel">
            +40747788940
          </a>
          <a href="" id="#about">
            About
          </a>
          <a href="" id="#delivery">
            Delivery
          </a>
          <a href="" id="#locations">
            Locations
          </a>
          <a href="" id="#contact">
            Contact
          </a>
        </div>
        {showMenu === true ? (
          <div className={s.mobileMenu}>
            <a href="tel:+40747788940" id="#tel">
              +40747788940
            </a>
            <a href="" id="#about">
              About
            </a>
            <a href="" id="#delivery">
              Delivery
            </a>
            <a href="" id="#locations">
              Locations
            </a>
            <a href="" id="#contact">
              Contact
            </a>
          </div>
        ) : null}
      </section>
    </header>
  );
};

export default Header;
