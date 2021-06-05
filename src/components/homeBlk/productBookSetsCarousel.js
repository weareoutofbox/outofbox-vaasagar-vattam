/** @format */

import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dBook from "../../assets/images/img/productBook.png";
import homeImg from "../../assets/images/img/homeimg.png";
import book1op from "../../assets/images/img/book1op.png";
import book2op from "../../assets/images/img/book3op.png";
import book3op from "../../assets/images/img/book2op.png";
import book4op from "../../assets/images/img/book4op.png";
import book5op from "../../assets/images/img/book5op.png";
import heart from "../../assets/images/icons/like-vv.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class BookSetCarousel extends React.Component {
  render() {
    const Ad = {
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className=''>
        <div className=''>
          <div className='homeOPBlkCarousel homeOPBlkCarousel2'>
            <Slider {...Ad}>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book1op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book2op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              <div className='homeCBlk'>
                <div className='homeCImg'>
                  <img src={book5op} alt='book' className='mainimg' />
                  <p className='title'>Pulli aadu Pullukattu</p>
                  <div className='likeWrap'>
                    <p className='bytext'>by: Lorem Ipsum</p>
                    <p>
                      <img src={heart} alt='like' />
                    </p>
                  </div>
                  <p className='price'> ₹ 150</p>
                  <p>
                    <button className='addCart'>Add to Cart</button>
                  </p>
                </div>
              </div>
              {/* <img src={book2op} alt='author' className='author' /> */}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default BookSetCarousel;
