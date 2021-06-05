/** @format */

import React, { useState } from "react";
import BookSetCarousel from "./productBookSetsCarousel";
import ProductCarousel from "./productCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function OurProducts() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='homeourProducts'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Popular books
        </button>

        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Popular book sets
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          Seasonal collections
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          {/* <hr /> */}
          <p>
            <ProductCarousel />
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <p>
            <ProductCarousel />
          </p>
          {/* <hr /> */}
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          {/* <hr /> */}
          <p>
            {" "}
            <ProductCarousel />
          </p>
        </div>
      </div>
      <div className='mob product-carousel-wrap'>
        <div className='popular-book-sets'>
          <button className='tabs active-tabs' onClick={() => toggleTab(1)}>
            Popular books
          </button>
          <p>
            <ProductCarousel />
          </p>
        </div>
        <div className='popular-book-sets'>
          <button className='tabs active-tabs' onClick={() => toggleTab(1)}>
            Popular book sets
          </button>
          {/* <p>
            <BookSetCarousel />
          </p> */}
          <p>
            <ProductCarousel />
          </p>
        </div>
        <div className='popular-book-sets'>
          <button className='tabs active-tabs' onClick={() => toggleTab(1)}>
            Seasonal Collection
          </button>
          {/* <p>
            <BookSetCarousel />
          </p> */}
          <p>
            <ProductCarousel />
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurProducts;
