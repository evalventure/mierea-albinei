import React from "react";
import s from "./Shop.module.css";
import { BsClockHistory } from "react-icons/bs";

const Shop = () => {
  return (
    <>
      <section className={s.shopSection}>
        <div className={s.favouritesContainer}>
          <div className={s.filterContainer}>
            <h3>Filter by:</h3>
            <p>Daily items</p>
            <p>Pastry</p>
            <p>Specialty</p>
          </div>
          <h1>Customer Favourites</h1>
          <div className={s.infoContainer}>
            <p>
              <BsClockHistory className="clock-icon" />
            </p>
            <p className="info-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
        </div>
        <div className={s.productsContainer}>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPic}></div>
            <h3>Product Name</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
