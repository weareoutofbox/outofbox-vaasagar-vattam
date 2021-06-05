/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo.png";
import fb from "../../assets/images/icons/fb.png";
import twitter from "../../assets/images/icons/twitter.svg";
import insta from "../../assets/images/icons/insta.png";
import footerDown from "../../assets/images/icons/footerDown.svg";
import { Link } from "react-router-dom";
class Footer extends React.Component {
  state = { loadmore: false };
  constructor() {
    super();
  }
  toggleLoadMore = () => {
    this.setState({ loadmore: !this.state.loadmore });
  };
  render() {
    return (
      <div className='footerWrap'>
        <div className='container'>
          <div className='footerBlk'>
            <div>
              <div className='footerSec1'>
                <div className='footerLogoBlk'>
                  <img src={logo} alt='logo' />
                  <p>Vaasagar Vattam</p>
                </div>

                <p className='footerDesc'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
                <div className='desk'>
                  <div className='footerIcons'>
                    <p>Follow Us</p>
                    <div className='icons'>
                      <img src={fb} alt='fb' />
                      <img src={twitter} alt='twitter' />
                      <img src={insta} alt='insta' />
                    </div>
                  </div>
                  <div className='copyright'>
                    <p>© 2021 Vaasagar Vattam. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='footerSec'>
                <div className='footerCategoriesHeading'>
                  <p>Book Categories</p>
                </div>
                <div className='footerCategoriesDesc'>
                  <div className='footerCategoriesDesc1'>
                    <ul className='footerList'>
                      <li>Art &amp; Photography</li>
                      <li>Action</li>
                      <li>Biography &amp; Autobiography</li>
                      <li>Body, Mind &amp; Spirit</li>
                      <li>Business &amp; Economics</li>
                      <li>Children’s book</li>
                      <li>Cookbook &amp; Food </li>
                      <li>Classic</li>
                      <li>Design</li>
                    </ul>
                  </div>
                  <div class='footerCategoriesDesc2'>
                    <ul className='footerList'>
                      <li>Drama</li>
                      <li>Education</li>
                      <li>Family &amp; Relationship</li>
                      <li>Fiction</li>
                      <li>History</li>
                      <li>Literature</li>
                      <li>Romance </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Drama
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Education
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Family &amp; Relationship
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Fiction
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        History
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Literature
                      </li>
                      <li className={this.state.loadmore ? "" : "d-none"}>
                        Romance{" "}
                      </li>
                      <a className={this.state.loadmore ? "d-none" : ""}>
                        <li
                          className='load-more'
                          onClick={() => {
                            this.toggleLoadMore();
                          }}>
                          <p>Load More </p>
                          <img src={footerDown} alt='plus-icon' />{" "}
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className='footerSec2'>
                <div>
                  <div className='footerCategoriesHeading'>
                    <p>Quick Links</p>
                  </div>
                  <div className='footerCategoriesDesc'>
                    <div className='footerCategoriesDesc1'>
                      <ul className='footerList'>
                        <Link to='/popular-books'>
                          <li>Popular Books</li>
                        </Link>
                        <Link to='/popular-books-sets'>
                          <li>Popular Book Sets</li>
                        </Link>
                        <Link to='/readers-club'>
                          <li>Reader’s Club</li>
                        </Link>

                        <li>Best Seller</li>
                        <Link to='/featured-author'>
                          <li>Featured Author</li>
                        </Link>
                        <li>Featured Series</li>
                        <li>Newest Books</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='footerCategoriesHeading'>
                    <p>Customer Area</p>
                  </div>
                  <div className='footerCategoriesDesc'>
                    <div className='footerCategoriesDesc1'>
                      <ul className='footerList'>
                        <li>My Account</li>
                        <li>Orders</li>
                        <li>Gifts &amp; Coupons</li>
                        <li>Terms &amp; Conditions</li>
                        <li>Privacy Policy</li>
                        <li>FAQ’s</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mob'>
                <div className='footerIcons'>
                  <p>Follow Us</p>
                  <div className='icons'>
                    <img src={fb} alt='fb' />
                    <img src={twitter} alt='twitter' />
                    <img src={insta} alt='insta' />
                  </div>
                </div>
                <div className='copyright'>
                  <p>© 2021 Vaasagar Vattam. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
