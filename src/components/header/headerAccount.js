/** @format */

import React from "react";
import logo from "../../assets/images/logo/logo-vv.png";
import mobLogo from "../../assets/images/logo/mob-logo.png";
import sLogo from "../../assets/images/logo/logo-mob.png";
// import cart from "../../assets/images/icons/shopping-cart.png";
import cart from "../../assets/images/icons/shopping-cart.svg";
import downArr from "../../assets/images/icons/down-arrow.svg";
import account from "../../assets/images/img/account.svg";
import cartDesk from "../../assets/images/icons/shopping-cart-desk.svg";
import user from "../../assets/images/icons/user-account.svg";
import hamburger from "../../assets/images/icons/hamburger.png";
import close from "../../assets/images/icons/close.svg";
import profile from "../../assets/images/icons/user.svg";
import orders from "../../assets/images/icons/orders.svg";
import heart from "../../assets/images/icons/heart.svg";
import coin from "../../assets/images/icons/rupee.svg";
import { NavLink, Link } from "react-router-dom";

class HeaderAccount extends React.Component {
  state = { clicked: false, left: 0, visible: false, accountVisible: false };
  constructor() {
    super();

    // this.handleInsideClick = this.handleInsideClick.bind(this);
    // this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }
  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  };
  toggleAccountVisibility = () => {
    document.body.classList.toggle("lock-scroll");
    this.setState({ accountVisible: !this.state.accountVisible });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    //   window.addEventListener("scroll", this.handleScroll);
  }

  handlePush = () => {
    this.props.history.push("/login");
  };
  handleScroll = () => {
    if (window.scrollY > 200) {
      document.querySelector(".headerWrap").className =
        "headerWrap headerscroll";
    } else {
      document.querySelector(".headerWrap").className = "headerWrap";
    }
  };
  scrollTop() {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth",
      },
      50
    );
  }
  handleClickNav = () => {
    if (this.state.visible) {
      this.setState({ visible: false });
    }
  };
  onPaths = (paths) => {
    return (match, location) => {
      return paths.includes(location.pathname);
    };
  };
  handleKeyPress = (e) => {
    if (e.keyCode === 27 && this.state.visible) {
      this.setState({ visible: false });
    }
  };
  handleSwipe() {
    this.setState({ left: -350 });
  }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  openNav = (event) => {
    document.body.classList.add("modal-open");
    this.setState({ clicked: true });
  };

  hideNav = (event) => {
    document.body.classList.remove("modal-open");
    this.setState({ clicked: false });
  };

  render() {
    return (
      <div>
        <div className='headerWrap'>
          <div className='container'>
            <div className='myNavBar'>
              <div className='headerBlk'>
                <div className='logoBlk'>
                  <img src={logo} alt='logo' />
                </div>

                <div class='searchBarWrap'>
                  <input
                    type='text'
                    placeholder='Search books by Titles, Authors, Keywords &amp; ISBN'
                    className='searchBar'
                  />
                </div>
                <div className='headerRightBlkWrap'>
                  <div className='headerRightBlk'>
                    <NavLink
                      exact
                      to='/cart'
                      activeClassName='active cartActive'
                      className='nav-links'>
                      <img src={cartDesk} alt='cart' />
                    </NavLink>
                    {/* <Link
                      exact
                      to='/login'
                      activeClassName='active'
                      className='nav-links'>
                      <button className='headerSignIn'>Sign In</button>
                    </Link> */}
                    <div className='headerAccountDBlk'>
                      <div className='headerMy-account'>
                        <img
                          src={account}
                          alt='myAccount'
                          className='my-account-img'></img>
                        <p
                          className='account-name'
                          onClick={this.toggleAccountVisibility}>
                          Shradha Maheshwari
                          <span>
                            <img
                              src={downArr}
                              alt='down-arrow'
                              className='down-arrow'
                            />
                          </span>
                        </p>
                      </div>
                      <div
                        className={
                          this.state.accountVisible
                            ? "accountDropdown"
                            : "d-none"
                        }>
                        <div className='dropdownBlk fade-in'>
                          <ul>
                            <li className='wrap'>
                              <img src={profile} alt='user' className='user' />
                              My profile
                            </li>
                            <li className='wrap'>
                              <img src={orders} alt='user' className='user' />
                              My profile
                            </li>
                            <li className='wrap'>
                              <img src={heart} alt='user' className='user' />
                              My Wishlist
                            </li>
                            <li className='wrap'>
                              <img src={heart} alt='user' className='user' />
                              My reviews/ratings
                            </li>
                            <li className='wrap'>
                              <img src={heart} alt='user' className='user' />
                              Events attented
                            </li>
                            <li className='wrap'>
                              <img src={coin} alt='user' className='user' />
                              My coins
                            </li>
                            <li className='wrap'>
                              <img src={heart} alt='user' className='user' />
                              Logout
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='menu-icon' onClick={this.handleClick}>
                <img src={this.state.clicked ? close : hamburger} alt='nav' />
              </div>
              <div className='headerListItem'>
                <ul
                  className={
                    this.state.clicked ? "nav-menu active" : "nav-menu"
                  }>
                  <li className='mob'>
                    <div className='headerRightBlk'>
                      <Link
                        exact
                        to='/cart'
                        activeClassName='active'
                        className='nav-links'>
                        <img src={cart} alt='cart' className='cartActive' />
                      </Link>
                      <button className='headerSignIn'>Sign In</button>
                    </div>
                  </li>
                  <li className='active'>
                    <NavLink
                      exact
                      to='/'
                      activeClassName='active'
                      className='nav-links'>
                      Home
                    </NavLink>
                  </li>{" "}
                  <li>
                    <NavLink
                      exact
                      to='/category'
                      activeClassName='active'
                      className='nav-links'>
                      Categories
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      exact
                      to='/popular-books'
                      activeClassName='active'
                      className='nav-links'>
                      Popular Books
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      exact
                      to='/popular-book-sets'
                      activeClassName='active'
                      className='nav-links'>
                      Popular Book Sets
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      exact
                      to='/readers-club/review'
                      isActive={this.onPaths([
                        "/readers-club/review",
                        "/readers-club/event",
                        "/readers-club/polls",
                        "/readers-club/points",
                        "/readers-club/offer",
                      ])}
                      active={
                        window.location.pathname === "/readers-club/review" ||
                        window.location.pathname === "/readers-club/offer" ||
                        window.location.pathname === "/readers-club/event"
                      }
                      // activeClassName='active'
                      onClick={this.scrollTop()}
                      className='nav-links'>
                      Reader's Club
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className=''></div>
            <div className='mySideNav'>
              <div className='logoWrap'>
                <div className='menu-icon' onClick={this.openNav}>
                  <img src={this.state.clicked ? close : hamburger} alt='nav' />
                </div>

                <div className='logoBlk'>
                  <img src={sLogo} alt='logo' className='logo-blkImg' />
                  <p className='logoText'>Vaasagar Vattam</p>
                </div>

                <li className='mob'>
                  <div className='headerRightBlk'>
                    <Link
                      exact
                      to='/cart'
                      activeClassName='active'
                      className='nav-links'>
                      <img src={cart} alt='cart' className='cartActive' />
                    </Link>
                    <button className='headerSignIn'>Sign In</button>
                  </div>
                </li>
              </div>
              <div className=''>
                <div class='searchBarMob'>
                  <input
                    type='text'
                    placeholder='Search books by Titles, Authors, Keywords &amp; ISBN'
                    className='searchBar'
                  />
                </div>
              </div>
              <div
                className={this.state.clicked ? "nav-menu active" : "nav-menu"}
                style={{ left: this.state.left }}
                onSwipe={this.handleSwipe.bind(this)}>
                <ul>
                  <div className='mobLogoBlk'>
                    <img src={user} alt='user' />
                    <p className='login'>Login &amp; signup </p>
                    <div className='logoBlk'>
                      <img src={sLogo} alt='logo' />
                      {/* <p>Vaasagar Vattam</p> */}
                    </div>
                    <div className='menu-icon' onClick={this.hideNav}>
                      <img
                        src={this.state.clicked ? close : hamburger}
                        alt='nav'
                      />
                    </div>
                  </div>

                  <a>
                    <li className='active  home'>
                      <NavLink
                        // onClick={() => {
                        //   // this.props.setLoader(true);
                        //   this.props.history.push("/review/vaasagar");
                        // }}
                        onClick={this.hideNav}
                        className=''
                        active={window.location.pathname === "/"}
                        exact
                        to='/'
                        activeClassName='active'
                        className='nav-links'>
                        Home
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    {" "}
                    <li>
                      <NavLink
                        className=''
                        active={window.location.pathname === "/category"}
                        // onClick={() => {
                        //   // this.props.setLoader(true);
                        //   this.props.history.push("/review/vaasagar/category");
                        // }}
                        onClick={this.hideNav}
                        exact
                        to='/category'
                        activeClassName='active'
                        className='nav-links'>
                        Categories
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        onClick={this.hideNav}
                        to='/popular-books'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Books
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        onClick={this.hideNav}
                        to='/popular-book-sets'
                        activeClassName='active'
                        className='nav-links'>
                        Popular Book Sets
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                  <a>
                    <li>
                      {" "}
                      <NavLink
                        exact
                        onClick={this.hideNav}
                        to='/readers-club/review'
                        isActive={this.onPaths([
                          "/readers-club/review",
                          "/readers-club/event",
                          "/readers-club/polls",
                          "/readers-club/points",
                          "/readers-club/offer",
                        ])}
                        active={
                          window.location.pathname === "/readers-club/review" ||
                          window.location.pathname === "/readers-club/offer" ||
                          window.location.pathname === "/readers-club/event"
                        }
                        // activeClassName='active'
                        onClick={this.scrollTop}
                        className='nav-links'>
                        Reader's Club
                      </NavLink>
                    </li>
                  </a>
                  <hr />
                </ul>

                <ul className='mySecondNav'>
                  <a>
                    <li>Gift card/ Coupons</li>
                  </a>
                  {/* <hr /> */}
                  <a>
                    <li>Help center</li>
                  </a>
                  {/* <hr /> */}
                  <a>
                    <li>Download app</li>
                  </a>
                  {/* <hr /> */}
                </ul>
              </div>
            </div>
          </div>
          <div className={this.state.accountVisible ? "app-body" : ""}></div>
        </div>
      </div>
    );
  }
}

export default HeaderAccount;
