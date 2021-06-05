/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dBook from "../../assets/images/img/productBook.png";
import book1op from "../../assets/images/img/book1op.png";
import book2op from "../../assets/images/img/book3op.png";
import book3op from "../../assets/images/img/book2op.png";
import book4op from "../../assets/images/img/book4op.png";
import book5op from "../../assets/images/img/book5op.png";
import heart from "../../assets/images/icons/like-vv.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: true,
      dots: false,
      pagination: true,
      navText: [
        "<div class='nav-button owl-prev'>next</div>",
        "<div class='nav-button owl-next'>prev</div>",
      ],
      navContainer: ".custom-nav",
      responsive: {
        0: {
          items: 3,
          nav: false,
          dots: true,
          margin: 30,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
          stagePadding: 0,
        },
        450: {
          items: 3,
          nav: true,
          dots: true,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
        },
        600: {
          items: 3,
          margin: 15,
          nav: true,
          dots: false,
          smartSpeed: 700,
          animateIn: "linear",
          animateOut: "linear",
        },
        1000: {
          items: 3,
          margin: 0,

          nav: true,
          dots: false,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
        },
        1399: {
          center: true,
          nav: true,
          autoHeight: false,
          dots: false,
          smartSpeed: 1500,
          animateIn: "linear",
          animateOut: "linear",
          items: 4,
          lazyLoad: true,
          nav: true,
          dots: false,
        },
      },
    };
  }
  render() {
    const BS = {
      centerMode: true,
      centerPadding: "100px",
      slidesToShow: 3,
      focusOnSelect: true,
    };
    return (
      <div className=''>
        <div className=''>
          <div className='homeOPBlkCarousel'>
            <OwlCarousel
              className='owl-theme'
              loop={true}
              center={true}
              // margin={30}
              margin={0}
              startPosition={3}
              //   smartSpeed={750}
              nav={true}
              items={5}
              dots={false}
              responsive={this.state.responsive}
              nav>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book1op} alt='book' className='mainimg' />
                  <div>
                    <p className='title'>Lorem Ipsum</p>
                    <div className='likeWrap'>
                      <p className='bytext'>by: Lorem Ipsum</p>
                      <p className='wishlist'>
                        <img src={heart} alt='like' />
                      </p>
                    </div>
                    <p className='price'> ₹ 150</p>
                    <p>
                      {/* <button className='addCart'>Add to Cart</button> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book2op} alt='book' className='mainimg book2op' />
                  <div>
                    <p className='title'>Pulli aadu Pullukattu</p>
                    <div className='likeWrap'>
                      <p className='bytext'>by: Lorem Ipsum</p>
                      <p className='wishlist'>
                        <img src={heart} alt='like' />
                      </p>
                    </div>
                    <p className='price'> ₹ 150</p>
                    <p>
                      {/* <button className='addCart'>Add to Cart</button> */}
                    </p>
                  </div>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p className='wishlist'>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    {/* <button className='addCart'>Add to Cart</button> */}
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book4op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p className='wishlist'>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    {/* <button className='addCart'>Add to Cart</button> */}
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p className='wishlist'>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    {/* <button className='addCart'>Add to Cart</button> */}
                  </p>
                </div>
              </div>
              {/* <div class='owl-theme'>
                <div class='owl-controls'>
                  <div class='custom-nav owl-nav'></div>
                </div>
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCarousel;
