/** @format */

import React from "react";
import book from "../../assets/images/img/productBook.png";
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

class ReviewBlk extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: Array(5).fill(-1),
      rated: 0,
      chars_left: 1000,
      max_chars: 1000,
      char_count: "0",
      chars_left1: 1000,
      max_chars1: 1000,
      char_count1: "0",
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
  handleWordCount = (event) => {
    const charCount = event.target.value.length;
    const maxChar = this.state.max_chars;
    const charLength = maxChar - charCount;
    this.setState({
      chars_left: charLength,
      char_count: charCount,
    });
  };
  handleWordCount1 = (event) => {
    const charCount1 = event.target.value.length;
    const maxChar1 = this.state.max_chars1;
    const charLength1 = maxChar1 - charCount1;
    this.setState({
      chars_left1: charLength1,
      char_count1: charCount1,
    });
  };
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
  render() {
    return (
      <div className='n-readersReviewBlk container'>
        <div className=''>
          <div className='n-reviewBlkSec1'>
            <div className='n-imgBlk'>
              <div className='n-img'>
                <img src={book} alt='book' className='n-bookImg' />
              </div>
              <div className='n-imgDetail'>
                <p className='category-name'>Category</p>
                <p className='title'>Pulli Aadu Pullukattu</p>
                <p className='name'>by: Krishnan Swaminathan</p>
                <div className='priceBlk'>
                  <p className='price'> ₹ 115</p>
                  <strike> ₹ 150 </strike>
                </div>
              </div>
            </div>
            <div className='n-reviewDetailsBlk'>
              <div className='n-reviewDetail'>
                <p className='n-reviewH'>
                  Please share your review for this book.
                </p>
                <p className='n-reviewRate'>Rate this product</p>
                <div class='ratingsWrap'>
                  <div className='rating-stars-widget-outer'>
                    <div className='rating-stars'>
                      {this.renderStar(1)}
                      {this.renderStar(2)}
                      {this.renderStar(3)}
                      {this.renderStar(4)}
                      {this.renderStar(5)}
                    </div>

                    {this.handleRating(this.state.rated)}
                  </div>
                </div>
                <p className='n-wr'>Write a review</p>
                <div className='n-textArea'>
                  <textarea
                    name=''
                    id='txt'
                    maxLength={this.state.max_chars}
                    required
                    onChange={this.handleWordCount}
                    placeholder='Write a review'></textarea>
                  <p className='textno'>
                    {this.state.char_count}/{this.state.chars_left}
                  </p>
                  <button className='post'>Post</button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className='n-reviewBlkSec1'>
            <div className='n-imgBlk'>
              <div className='n-img'>
                <img src={book} alt='book' className='n-bookImg' />
              </div>
              <div className='n-imgDetail'>
                <p className='category-name'>Category</p>
                <p className='title'>Pulli Aadu Pullukattu</p>
                <p className='name'>by: Krishnan Swaminathan</p>
                <div className='priceBlk'>
                  <p className='price'> ₹ 115</p>
                  <strike> ₹ 150 </strike>
                </div>
              </div>
            </div>

            <div className='n-reviewDetailsBlk'>
              <div className='n-reviewDetail'>
                <p className='n-reviewH'>
                  Please share your review for this book.
                </p>
                <p className='n-reviewRate'>Rate this product</p>
                <div class='ratingsWrap'>
                  <div className='rating-stars-widget-outer'>
                    <div className='rating-stars'>
                      {this.renderStar(1)}
                      {this.renderStar(2)}
                      {this.renderStar(3)}
                      {this.renderStar(4)}
                      {this.renderStar(5)}
                    </div>

                    {this.handleRating(this.state.rated)}
                  </div>
                </div>
                <p className='n-wr'>Write a review</p>
                <div className='n-textArea'>
                  <textarea
                    name=''
                    id='txt'
                    maxLength={this.state.max_chars1}
                    required
                    onChange={this.handleWordCount1}
                    placeholder='Write a review'></textarea>
                  <p className='textno'>
                    {this.state.char_count1}/{this.state.chars_left1}
                  </p>
                  <button className='post'>Post</button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className='n-nmo'>No more orders</p>
        </div>
      </div>
    );
  }
}

export default ReviewBlk;
