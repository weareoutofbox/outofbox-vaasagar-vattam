/** @format */

import React from "react";
import hamburger from "../../assets/images/icons/hamburger.png";
import close from "../../assets/images/icons/close.svg";
import upArrow from "../../assets/images/icons/up-arr.svg";
import $ from "jquery";
import minus from "../../assets/images/icons/minus-vv.svg";
import plusIcon from "../../assets/images/icons/footerDown.svg";

import plus from "../../assets/images/icons/plus-vv.svg";
import downArr from "../../assets/images/icons/down-arrow.svg";
class Filter extends React.Component {
  state = {
    clicked: false,
    editorClick: false,
    clickBestSales: false,
    clickHandleMostCommented: false,
    clickNewestBooks: false,
    clickFeaturedAuthor: false,
    clickFeaturedSeries: false,
    publishersClick: false,
    loadmore: false,
    yearsClick: false,
    priceClick: false,
  };
  handleClickBook = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  handleClickEditor = () => {
    this.setState({ editorClick: !this.state.editorClick });
  };
  handleClickPublishers = () => {
    this.setState({ publishersClick: !this.state.publishersClick });
  };
  handleClickYears = () => {
    this.setState({ yearsClick: !this.state.yearsClick });
  };
  handleClickPrice = () => {
    this.setState({ priceClick: !this.state.priceClick });
  };
  handleClickBestSales = () => {
    this.setState({ clickBestSales: !this.state.clickBestSales });
  };
  handleMostCommented = () => {
    this.setState({
      clickHandleMostCommented: !this.state.clickHandleMostCommented,
    });
  };
  handleNewestBooks = () => {
    this.setState({
      clickNewestBooks: !this.state.clickNewestBooks,
    });
  };
  handleFeaturedAuthor = () => {
    this.setState({
      clickFeaturedAuthor: !this.state.clickFeaturedAuthor,
    });
  };
  handleFeaturedSeries = () => {
    this.setState({
      clickFeaturedSeries: !this.state.clickFeaturedSeries,
    });
  };
  toggleLoadMore = () => {
    this.setState({ loadmore: !this.state.loadmore });
  };
  render() {
    return (
      <div className='filterWrap'>
        <div className='mob-custom-container'>
          <div className='filterBlk'>
            <div className='heading'>
              <p>Book Categories</p>

              <div className='' onClick={this.handleClickBook}>
                <img
                  src={this.state.clicked ? upArrow : downArr}
                  alt='nav'
                  className=''
                />
              </div>
            </div>
            <form>
              <ul
                className={
                  this.state.clicked ? "filter-menu active" : "filter-menu"
                }>
                <li className='book-filterList'>
                  <label for='c1'>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    <p id='mylist'>All Genres</p>
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c3' name='cc' class='mycheckbox' />
                    <span></span>
                    Art &amp; Photography
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c2' name='cc' class='mycheckbox' />
                    <span></span>
                    Action
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Biography &amp; Autobiography
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Body, Mind &amp; Spirit
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Buisness &amp; Economics
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Children's book
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Cookbook &amp; Food
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Classic
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Design
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Drama
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Education
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Family &amp; Relationship
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Fiction
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    History
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Classic
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Design
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Drama
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Education
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Family &amp; Relationship
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Fiction
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    History
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Literature
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Romance
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Drama
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Education
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Family &amp; Relationship
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Fiction
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    History
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Literature
                  </label>
                </li>
                <li
                  className={
                    this.state.loadmore ? "book-filterList" : "d-none"
                  }>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Romance
                  </label>
                </li>
                <div
                  className={this.state.loadmore ? "d-none" : "load-moreBlk"}>
                  <li
                    className='load-more'
                    onClick={() => {
                      this.toggleLoadMore();
                    }}>
                    Load More <img src={plusIcon} alt='plus-icon' />
                  </li>
                </div>
              </ul>
            </form>
            <div className='heading editors-pickWrap'>
              <p>Editors Pick</p>
              <div className='' onClick={this.handleClickEditor}>
                <img
                  src={this.state.editorClick ? upArrow : downArr}
                  alt='nav'
                />
              </div>
            </div>

            <ul
              className={
                this.state.editorClick ? "editor-menu active" : "editor-menu"
              }>
              <div className='bestSalesBlk' onClick={this.handleClickBestSales}>
                <img src={this.state.clickBestSales ? minus : plus} alt='nav' />
                <p
                  //   className='bestSalesHeading'
                  className={`bestSalesHeading ${
                    this.state.clickBestSales
                      ? "subMenu-heading active"
                      : "bestSalesHeading"
                  }`}>
                  Best Sales(10)
                </p>
              </div>
              <ul
                className={
                  this.state.clickBestSales ? "best-sales active" : "best-sales"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Diabetes Emystifiedt
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
              </ul>
              <div className='bestSalesBlk' onClick={this.handleMostCommented}>
                <img
                  src={this.state.clickHandleMostCommented ? minus : plus}
                  alt='nav'
                />
                <p
                  className={`bestSalesHeading ${
                    this.state.clickHandleMostCommented
                      ? "subMenu-heading active"
                      : "bestSalesHeading"
                  }`}>
                  Most Commented(15)
                </p>
              </div>
              <ul
                className={
                  this.state.clickHandleMostCommented
                    ? "most-commented active"
                    : "most-commented"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
              </ul>
              <div className='bestSalesBlk' onClick={this.handleNewestBooks}>
                <img
                  src={this.state.clickNewestBooks ? minus : plus}
                  alt='nav'
                />
                <p
                  className={`bestSalesHeading ${
                    this.state.clickNewestBooks
                      ? "subMenu-heading active"
                      : "bestSalesHeading"
                  }`}>
                  Newest Books (10)
                </p>
              </div>
              <ul
                className={
                  this.state.clickNewestBooks
                    ? "newest-books active"
                    : "newest-books"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Lorem Ipsum
                  </label>
                </li>
              </ul>
              <div className='bestSalesBlk' onClick={this.handleFeaturedAuthor}>
                <img
                  src={this.state.clickFeaturedAuthor ? minus : plus}
                  alt='nav'
                />
                <p
                  className={`bestSalesHeading ${
                    this.state.clickFeaturedAuthor
                      ? "subMenu-heading active"
                      : "bestSalesHeading"
                  }`}>
                  Featured Author (10)
                </p>
              </div>
              <form>
                <ul
                  className={
                    this.state.clickFeaturedAuthor
                      ? "featured-author active"
                      : "featured-author"
                  }>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                </ul>
              </form>
              <div className='bestSalesBlk' onClick={this.handleFeaturedSeries}>
                <img
                  src={this.state.clickFeaturedSeries ? minus : plus}
                  alt='nav'
                />
                <p
                  className={`bestSalesHeading ${
                    this.state.clickFeaturedSeries
                      ? "subMenu-heading active"
                      : "bestSalesHeading"
                  }`}>
                  Featured Series (10)
                </p>
              </div>
              <form>
                <ul
                  className={
                    this.state.clickFeaturedSeries
                      ? "featured-series active"
                      : "featured-series"
                  }>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                  <li className='book-filterList'>
                    <label>
                      <input
                        type='radio'
                        id='c1'
                        name='cc'
                        class='mycheckbox'
                      />
                      <span></span>
                      Lorem Ipsum
                    </label>
                  </li>
                </ul>
              </form>
            </ul>
            <div className=' editors-pickWrap'>
              <div className='heading'>
                <p>Publishers</p>

                <div className='' onClick={this.handleClickPublishers}>
                  <img
                    src={this.state.publishersClick ? upArrow : downArr}
                    alt='nav'
                    className=''
                  />
                </div>
              </div>
            </div>
            <form>
              <ul
                className={
                  this.state.publishersClick
                    ? "filter-menu active"
                    : "filter-menu"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    History
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Literature
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Romance
                  </label>
                </li>
              </ul>
            </form>
            <div className=' editors-pickWrap'>
              <div className='heading'>
                <p>Years</p>

                <div className='' onClick={this.handleClickYears}>
                  <img
                    src={this.state.yearsClick ? upArrow : downArr}
                    alt='nav'
                    className=''
                  />
                </div>
              </div>
            </div>
            <form>
              <ul
                className={
                  this.state.yearsClick ? "filter-menu active" : "filter-menu"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    History
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Literature
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Romance
                  </label>
                </li>
              </ul>
            </form>
            <div className=' editors-pickWrap'>
              <div className='heading'>
                <p>Price Range</p>

                <div className='' onClick={this.handleClickPrice}>
                  <img
                    src={this.state.priceClick ? upArrow : downArr}
                    alt='nav'
                    className=''
                  />
                </div>
              </div>
            </div>
            <form>
              <ul
                className={
                  this.state.priceClick ? "filter-menu active" : "filter-menu"
                }>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Under ₹100
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    ₹100 - ₹500
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    ₹500 - ₹1000
                  </label>
                </li>
                <li className='book-filterList'>
                  <label>
                    <input type='radio' id='c1' name='cc' class='mycheckbox' />
                    <span></span>
                    Above ₹1000
                  </label>
                </li>
              </ul>
            </form>
            <div className='clearBtn'>
              <button className='clear'>Reset Filters</button>
            </div>
            <div className='applyBtn'>
              <button className='apply'>Apply</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
