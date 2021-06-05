/** @format */

import React, { useState, useEffect } from "react";
import star from "../../assets/images/icons/star-rating.svg";
import lm from "../../assets/images/img/lm.png";
import ratings from "../../assets/images/icons/ratings-grp.png";
import ReviewBlk from "./reviewBlk";
import OfferBlk from "./offerBlk";
import EventsBlk from "./eventsBlk";
import PollsBlk from "./pollsBlk";
import PointsBlk from "./pointsBlk";
import { NavLink, Link } from "react-router-dom";

function ReadersTab() {
  const [toggleState, setToggleState] = useState(1);
  const [scrolled, setScrolled] = React.useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.handleScroll);
  //   //   window.addEventListener("scroll", this.handleScroll);
  // }

  // handleScroll = () => {
  //   if (window.scrollY > 90) {
  //     document.querySelector(".searchBarMob").className = "searchBarMob Scroll";
  //   } else {
  //     document.querySelector(".searchBarMob").className = "searchBarMob";
  //   }
  // };
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["ReadersTab"];
  if (scrolled) {
    x.push("scrolled");
  }
  return (
    <div>
      <div className='n-readersClubBlk'>
        <div className={toggleState === 1 ? "reviews-bg fade-in" : "d-none"}>
          <div className='n-readersClubSec1'>
            <div className='container'>
              <div className='n-textBlk'>
                <h1>Welcome to the Reader's Club.</h1>
                <p>
                  A community for book lovers, where you can discuss about your
                  favourite books, participate in events and discover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 2 ? "events-bg fade-in" : "d-none"}>
          <div className='n-readersClubSec1'>
            <div className='container'>
              <div className='n-textBlk'>
                <h1>Welcome to the Reader's Club.</h1>
                <p>
                  A community for book lovers, where you can discuss about your
                  favourite books, participate in events and discover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 3 ? "offers-bg fade-in" : "d-none"}>
          <div className='n-readersClubSec1'>
            <div className='container'>
              <div className='n-textBlk'>
                <h1>Welcome to the Reader's Club.</h1>
                <p>
                  A community for book lovers, where you can discuss about your
                  favourite books, participate in events and discover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 4 ? "points-bg fade-in" : "d-none"}>
          <div className='n-readersClubSec1'>
            <div className='container'>
              <div className='n-textBlk'>
                <h1>Welcome to the Reader's Club.</h1>
                <p>
                  A community for book lovers, where you can discuss about your
                  favourite books, participate in events and discover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={toggleState === 5 ? "polls-bg fade-in" : "d-none"}>
          <div className='n-readersClubSec1'>
            <div className='container'>
              <div className='n-textBlk'>
                <h1>Welcome to the Reader's Club.</h1>
                <p>
                  A community for book lovers, where you can discuss about your
                  favourite books, participate in events and discover.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='n-readersClubSec2'>
          <div className='container readersscroll'>
            <div className='n-readersTabBlk'>
              <div className='n-readers-tabs'>
                <div className='n-readersTabScroll'>
                  <div className={x.join(" ")}>
                    <NavLink to='/readers-club/#reviews'>
                      <button
                        id='1'
                        className={
                          toggleState === 1 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(1)}>
                        Reviews
                      </button>
                    </NavLink>
                    <NavLink to='/readers-club/#event'>
                      <button
                        id='2'
                        className={
                          toggleState === 2 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(2)}>
                        Events
                      </button>
                    </NavLink>
                    <NavLink
                      id='3'
                      className={
                        toggleState === 3 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(3)}>
                      Offers
                    </NavLink>
                    <button
                      className={
                        toggleState === 4 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(4)}>
                      Points
                    </button>
                    <button
                      className={
                        toggleState === 5 ? "tabs active-tabs" : "tabs"
                      }
                      onClick={() => toggleTab(5)}>
                      Polls
                    </button>
                  </div>
                </div>
              </div>
              <div className='content-tabs'>
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }>
                  {/* <hr /> */}
                  <ReviewBlk />
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                  id='#event'>
                  <EventsBlk />
                </div>
                <div
                  className={
                    toggleState === 3 ? "content  active-content" : "content"
                  }>
                  <OfferBlk />
                </div>
                <div
                  className={
                    toggleState === 4 ? "content  active-content" : "content"
                  }>
                  <PointsBlk />
                </div>
                <div
                  className={
                    toggleState === 5 ? "content  active-content" : "content"
                  }>
                  <PollsBlk />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadersTab;
