/** @format */

import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import arrow from "../../assets/images/icons/inside.svg";
import book from "../../assets/images/img/productBook.png";
import Rbook from "../../assets/images/img/rel-book.png";
import author from "../../assets/images/img/author-img.png";
import zoom from "../../assets/images/icons/zoom.svg";
import msg from "../../assets/images/icons/msg.png";
import fb from "../../assets/images/icons/fb-p.png";
import t from "../../assets/images/icons/t-p.png";
import whatsapp from "../../assets/images/icons/whatsapp.png";
import ratings from "../../assets/images/icons/ratings-grp.png";
import stock from "../../assets/images/icons/stock.svg";
import HeaderFirst from "../../components/header/headerFirst";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ProductTab from "../../components/productBlk/productTab";
import ReactImageMagnify from "react-image-magnify";
// const imageBaseUrl = book;
// "https://s3-us-west-1.amazonaws.com/react-package-assets/images/";
const src = book;
// const images = [{ name: "wristwatch_355.jpg", vw: "100w" }];
function Star(props) {
  return (
    <div
      className={`star ${props.value === 0 ? "semi-active" : ""} ${
        props.position <= props.rated ? "active" : ""
      } `}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}>
      <i className='fa fa-star'></i>
    </div>
  );
}

function Rating(props) {
  let rating = props.rating;
  return (
    <div className={"after-rating-message " + (rating > 0 ? "show" : "")}>
      <span>{rating}</span>
      <br />
      {/* <span>{messages[rating]}</span> */}
    </div>
  );
}

class ProductPage extends React.Component {
  // get srcSet() {
  //   return images
  //     .map((image) => {
  //       return `${imageBaseUrl}${image.name} ${image.vw}`;
  //     })
  //     .join(", ");
  // }
  constructor(props) {
    super(props);
    this.state = {
      backgroundImage: `url(${src})`,
      backgroundPosition: "50% 50%",
      counter: 0,
      stars: Array(5).fill(-1),
      rated: 0,

      responsive: {
        0: {
          items: 3,
          nav: false,
        },
        450: {
          items: 3,
          nav: false,
        },
        600: {
          items: 3,
          margin: 15,
          nav: false,
        },
        1000: {
          items: 3,
          margin: 20,
          nav: false,
        },
        1399: {
          items: 3,
          center: true,
          nav: false,
          dots: false,
        },
      },
    };
  }
  handleMouseOver(i) {
    let currentRating = this.state.rated;

    if (currentRating > 0) {
      const hoverRatedStars = this.state.stars.slice();
      this.state.stars.fill(hoverRatedStars, 0, currentRating, i);
      this.setState({ stars: hoverRatedStars });
    } else {
      const hoverStars = Array(5).fill(-1);
      this.state.stars.fill(hoverStars, 0, 0, i + 1);
      this.setState({ stars: hoverStars });
    }
  }
  handleMouseOut() {
    let currentRating = this.state.rated;
    if (currentRating > 0) {
      const resetRatedStars = this.state.stars.slice();
      this.state.stars.fill(
        resetRatedStars,
        -1,
        currentRating,
        resetRatedStars.length
      );
      this.setState({ stars: resetRatedStars });
    } else {
      const resetStars = this.state.stars.slice();
      this.state.stars.fill(resetStars, -1, 0, resetStars.length);
      this.setState({ stars: resetStars });
    }
  }

  handleClick(i) {
    const clickedStar = this.state.stars.slice();

    this.state.stars.fill(clickedStar, 1, 0, i);
    this.state.stars.fill(clickedStar, 1, i, clickedStar.length);

    this.setState({
      stars: clickedStar,
      rated: i,
    });
  }

  handleRating(rating) {
    return <Rating rating={this.state.rated} />;
  }

  renderStar(i) {
    return (
      <Star
        position={i}
        value={this.state.stars[i]}
        rated={this.state.rated}
        onMouseEnter={() => this.handleMouseOver(i)}
        onMouseLeave={() => this.handleMouseOut()}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  // handleMouseMove = (e) => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   const x = ((e.pageX - left) / width) * 100;
  //   const y = ((e.pageY - top) / height) * 100;
  //   this.setState({ backgroundPosition: `${x}% ${y}%` });
  // };
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    return (
      <div className='productWrap'>
        <HeaderFirst />
        <Header />
        <div className='productWrapBlk container'>
          <div className='productSBlk'>
            <div className='mobWrapProduct'>
              <div className='productSec1'>
                <p className='look-inside'>
                  Look&nbsp;&nbsp;
                  <span>
                    Inside <img src={arrow} alt='arrow' />
                  </span>
                </p>
                <div className='imgZoom'>
                  {/* <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "/static/media/productBook.65515926.png",
                        width: 100,
                        height: 250,
                        className: "smallImg",
                      },
                      largeImage: {
                        alt: "gfd",
                        src: "/static/media/productBook.65515926.png",
                        width: 1200,
                        height: 1260,
                      },
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                      // isHintEnabled: true,
                    }}
                  /> */}
                  <img src={book} alt='book' />
                </div>
                <div className='productSec2'>
                  <div className='productBookTitle n-pbWrap'>
                    <h1>Pulli aadu Pullukattu</h1>
                  </div>
                  <div class='ratingsWrap'>
                    <img src={ratings} alt='ratings' />
                    <div className='rating-sec2'>
                      {" "}
                      <img src={msg} alt='msg' />
                      <p className='reviews'>231 Reviews</p>
                      <img src={fb} alt='msg' />
                      <img src={t} alt='msg' />
                      <img src={whatsapp} alt='msg' />
                    </div>
                  </div>
                </div>
                {/* <figure onMouseMove={this.handleMouseMove} style={this.state}> */}
                {/* <img src={book} alt='book' className='pbook' /> */}
                {/* <ZoomApplication /> */}
                {/* </figure> */}
              </div>
              <div className='productSec2 mob'>
                <div className='pAuthorDetailSectionWrap'>
                  <div className='pAuthorDetail'>
                    <div className='img'>
                      <img src={author} alt='author-img' />
                    </div>
                    <div className='pbBlkWrap'>
                      <div className='pbBlkMob'>
                        <div className='authorName'>
                          <p className='author'>Author</p>
                          <p className='name'>Sandro Loren</p>
                        </div>
                        <div className='authorName'>
                          <p className='author'>Year</p>
                          <p className='name'>1999</p>
                        </div>
                      </div>
                      <div className='pbBlkMob'>
                        <div className='authorName'>
                          <p className='author'>Publisher</p>
                          <p className='name'>Lorem Ipsum</p>
                        </div>
                        <div className='authorName'>
                          <p className='author'>Book Format</p>
                          <p className='name'>Paperback, 450 Pages</p>
                        </div>
                        {/* <div className='stock'>
                          <button>
                            <img src={stock} alt='stock' />
                            In Stock
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='desk'>
              <div className='productSec1'>
                <p className='look-inside'>
                  Look&nbsp;&nbsp;
                  <span>
                    Inside <img src={arrow} alt='arrow' />
                  </span>
                </p>
                <div className='imgZoom'>
                  <ReactImageMagnify
                    {...{
                      smallImage: {
                        alt: "Wristwatch by Ted Baker London",
                        isFluidWidth: true,
                        src: "/static/media/productBook.65515926.png",
                        width: 100,
                        height: 250,
                        className: "smallImg",
                      },
                      largeImage: {
                        alt: "gfd",
                        src: "/static/media/productBook.65515926.png",
                        width: 1200,
                        height: 1260,
                      },
                      enlargedImageContainerDimensions: {
                        width: "100%",
                        height: "100%",
                      },
                      // isHintEnabled: true,
                    }}
                  />
                </div>
                <p className='zoom'>
                  <img src={zoom} alt='arrow' />
                  Hover To Zoom
                </p>
              </div>
            </div>
            <div className='productSec2'>
              <div className='productBookTitle desk'>
                <h1>Pulli aadu Pullukattu</h1>
              </div>
              <div class='ratingsWrap desk'>
                {/* <div className='rating-stars-widget-outer'>
                  <div className='rating-stars'>
                    {this.renderStar(1)}
                    {this.renderStar(2)}
                    {this.renderStar(3)}
                    {this.renderStar(4)}
                    {this.renderStar(5)}
                  </div>

                  {this.handleRating(this.state.rated)}
                </div>
                <div className='rating-sec2'>
                  {" "}
                  <img src={msg} alt='msg' />
                  <p className='reviews'>231 Reviews</p>
                  <img src={fb} alt='msg' />
                  <img src={t} alt='msg' />
                </div> */}
                <img src={ratings} alt='ratings' className='productRatings' />
                <div className='rating-sec2'>
                  {" "}
                  <img src={msg} alt='msg' />
                  <p className='reviews'>231 Reviews</p>
                  <img src={fb} alt='msg' />
                  <img src={t} alt='msg' />
                  <img src={whatsapp} alt='msg' />
                </div>
              </div>
              <div>
                <div className='pAuthorDetail desk'>
                  <div className='img'>
                    <img src={author} alt='author-img' />
                  </div>
                  <div className='authorName'>
                    <p className='author'>Author</p>
                    <p className='name'>Sandro Loren</p>
                  </div>
                  <div className='authorName'>
                    <p className='author'>Publisher</p>
                    <p className='name'>Lorem Ipsum</p>
                  </div>
                  <div className='authorName'>
                    <p className='author'>Year</p>
                    <p className='name'>1999</p>
                  </div>
                  <div className='authorName'>
                    <p className='author'>Book Format</p>
                    <p className='name'>Paperback, 450 Pages</p>
                  </div>
                  {/* <div className='stock desk'>
                    <button>
                      <img src={stock} alt='stock' />
                      In Stock
                    </button>
                  </div> */}
                </div>
              </div>
              <div className='pBookDetail'>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters.
                </p>
                <p>
                  As opposed to using 'Content here, content here', making it
                  look like readable English. Many desktop publishing packages
                  and web page editors now use Lorem Ipsum as their default
                  model text.{" "}
                </p>
                <a className='interview-link'>Read author's interview</a>
              </div>
              <div className='pPriceBlk'>
                <div>
                  <p> ₹ 150</p>
                </div>
                <div className='buyInc'>
                  <div className='inc-wrap'>
                    <div className='inc'>
                      <button onClick={this.decrement} className='decrement'>
                        -
                      </button>
                      <div id='counter'>{this.state.counter}</div>
                      <button onClick={this.increment} className='increment'>
                        {" "}
                        +{" "}
                      </button>
                    </div>
                  </div>

                  <div className='buyWrap'>
                    <button class='cart'>Add to cart</button>
                    <button className='buy'>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='productTabWrap'>
            <ProductTab />

            <div className='relatedBooksBlk'>
              <div className='related-books'>
                <p>Related Books</p>
              </div>
              <div className='books-grp'>
                <div className='relatedBook1'>
                  <div className='sec1'>
                    <img src={Rbook} alt='book' />
                    <p className='title'>Un to Him</p>
                    <p className='cat'>Category</p>
                    <p className='name'>by: Varalotti Rengasamy</p>
                    <img src={ratings} alt='ratings' className='ratings' />
                    <div className='price'>
                      <p className='final-price'> ₹ 115</p>
                      <span>
                        <strike> ₹ 150</strike>
                      </span>
                    </div>
                    <button className='add-btn'>Add to Cart</button>
                  </div>
                </div>
                <div className='relatedBook1'>
                  <div className='sec1'>
                    <img src={Rbook} alt='book' />
                    <p className='title'>Un to Him</p>
                    <p className='cat'>Category</p>
                    <p className='name'>by: Varalotti Rengasamy</p>
                    <img src={ratings} alt='ratings' className='ratings' />
                    <div className='price'>
                      <p className='final-price'> ₹ 115</p>
                      <span>
                        <strike> ₹ 150</strike>
                      </span>
                    </div>
                    <button className='add-btn'>Add to Cart</button>
                  </div>
                </div>
              </div>
              <button className='view-more'>View More</button>
            </div>
          </div>
        </div>
        <div className='productReaderSec'>
          <div className='container readerSecWrap'>
            <p className='readers-title'>Welcome to the Reader's Club.</p>
            <p className='readers-detail'>
              A community for book lovers, where you can discuss about your
              favourite books,
              <br /> participate in events and discover.
            </p>
            <button className='join-btn'>Join</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProductPage;
