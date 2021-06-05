/** @format */

import React from "react";
import HeaderFirst from "../../components/header/headerFirst";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Books from "../../components/category/books";
import Filter from "../category/filter";
// class Accordion extends React.Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }

//   componentDidMount() {
//     this.handleClick();
//   }

//   handleClick() {
//     const acc = this._acc.children;
//     for (let i = 0; i < acc.length; i++) {
//       let a = acc[i];
//       a.onclick = () => a.classList.toggle("active");
//     }
//   }

//   render() {
//     return (
//       <div ref={(a) => (this._acc = a)} onClick={this.handleClick}>
//         {this.props.children}
//       </div>
//     );
//   }
// }

class PopularBook extends React.Component {
  state = {
    clicked: false,
  };
  //   state = { isMobile: "" };
  //   componentDidMount() {
  //     window.addEventListener(
  //       "resize",
  //       () => {
  //         this.setState({
  //           isMobile: window.innerWidth < 900,
  //         });
  //       },
  //       false
  //     );
  //   }
  //   close {
  //     $(".btn-class.active").close;
  //   }
  close = () => {
    this.setState({ clicked: false });
  };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    // const className = this.state.isMobile ? "mob-Filter" : "";
    return (
      <div
        className={` ${
          this.state.clicked ? "categoryWrap active" : "categoryWrap"
        }`}>
        <HeaderFirst />
        <Header />

        <div className='categoryBlk'>
          <div className='container'>
            <div className='categoryDiv'>
              <div className='categoryDiv1'>
                <div className='heading'>
                  <h1 className='desk'>Filters</h1>
                </div>

                <div className='acc-blk'>
                  {/* <img
                    src={this.state.addClass ? upArrow : payment}
                    alt='nav'
                    className=''
                  /> */}
                </div>
                {/* <label className='btn'>
                  <input type='checkbox' id='c1' name='cc' class='filterBox' />
                  <span></span>
                  Filter
                </label> */}
                <div
                  className={
                    this.state.clicked ? "btn-class active" : "btn-class"
                  }>
                  <div className=''>
                    <div className='mobFilterView'>
                      <button className='close-btn' onClick={this.close}>
                        Close
                      </button>
                    </div>
                    <Filter />
                  </div>
                  {/* <Accordion>
                    <div className='accor'>
                      <div className='head'>
                        <p className='title'>Book Categories</p>
                      </div>
                      <div className='body'>hsgchsMZ</div>
                    </div>
                    <div className='body'>
                      <div className='filterBlk'>
                        <input
                          type='checkbox'
                          id='vehicle1'
                          name='vehicle1'
                          value='Bike'
                        />
                        <label for='vehicle1'> I have a bike</label>
                        <br />
                      </div>
                    </div>
                    <div>
                  </Accordion> */}
                  {/* <div class='nav'>
                    <input type='checkbox' id='menu' />
                    <img src={upArrow} class='arrow' />

                    <label for='menu' id='nav-icon'>
                      <div className='accor'>
                        <div className='head'>
                          <p className='title'>Book Categories</p>
                        </div>
                      </div>
                    </label>

                    <div class='multi-level'>
                      <div className='checkBoxWrap'>
                        <p>gsh</p>
                      </div>
                      <div class='item'>
                        <input type='checkbox' id='A' />
                        <img src={upArrow} class='arrow' />
                        <label for='A'>Book Categories</label>

                        <ul>
                          <li>
                            <a href='#'>Branding</a>
                          </li>
                          <li>
                            <a href='#'>Web/App Development</a>
                          </li>
                          <li>
                            <a href='#'>Internet Marketing and SEO</a>
                          </li>
                        </ul>
                      </div>
                      <div class='item'>
                        <input type='checkbox' id='B' />
                        <img src='images/Arrow.png' class='arrow' />
                        <label for='B'>Jobs</label>

                        <ul>
                          <li>
                            <div class='sub-item'>
                              <input type='checkbox' id='B-A' />
                              <img src='images/Arrow.png' class='arrow' />
                              <label for='B-A'>UI/UX</label>

                              <ul>
                                <li>
                                  <a href='#'>UI/UX Designer</a>
                                </li>
                                <li>
                                  <a href='#'>UI Designer</a>
                                </li>
                                <li>
                                  <a href='#'>UX Designer</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div class='sub-item'>
                              <input type='checkbox' id='B-B' />
                              <img src={upArrow} class='arrow' />
                              <label for='B-B'>Development</label>

                              <ul>
                                <li>
                                  <a href='#'>Front end Developer</a>
                                </li>
                                <li>
                                  <a href='#'>Back end Developer</a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a href='#'>Graphic Designer</a>
                          </li>
                          <li>
                            <a href='#'>Logo Designer</a>
                          </li>
                        </ul>
                      </div>
                      <div class='item'>
                        <input type='checkbox' id='C' />
                        <img src={upArrow} class='arrow' />
                        <label for='C'>About Us</label>

                        <ul>
                          <li>
                            <a href='#'>Our Team</a>
                          </li>
                          <li>
                            <a href='#'>Clients</a>
                          </li>
                          <li>
                            <a href='#'>Our Work</a>
                          </li>
                        </ul>
                      </div>
                    </div> */}
                  {/* </div>
                </div> */}
                </div>
              </div>

              <div className='categoryDiv2'>
                <input type='checkbox' name='toggle' id='toggle' />
                <label for='toggle'></label>
                <div className='heading bookFilters'>
                  <h1>Popular Books</h1>
                  <div className='' onClick={this.handleClick}>
                    <h1 className='mob'>Filters</h1>
                  </div>
                </div>

                <Books />
              </div>
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

export default PopularBook;
