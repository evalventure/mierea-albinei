import React from "react";
import s from "./Products.module.css";
import { BsClockHistory } from "react-icons/bs";

const Shop = () => {
  return (
    <>
      <section className={s.productsSection}>
        <div className={s.favouritesContainer}>
          <div className={s.titleDiv}>
            <h1>Customer Favourites</h1>
          </div>
          <div className={s.filterInfoContainer}>
            <div className={s.filterContainer}>
              <h3>Filter by:</h3>
              <p>Daily items</p>
              <p>Pastry</p>
              <p>Specialty</p>
            </div>

            <div className={s.infoContainer}>
              <p>
                <BsClockHistory className="clock-icon" />
              </p>
              <p className={s.infoText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
        <div className={s.productsContainer}>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
          <div className={s.productDiv}>
            <div className={s.productPicDiv}>
              <div className={s.productPic}></div>
            </div>
            <div className={s.productInfoDiv}>
              <p className={s.productInfo}>i</p>
            </div>
            <div className={s.productDetailsContainer}>
              <p>5.00$</p>
              <p>300g</p>
            </div>
            <h3>Product Name</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
