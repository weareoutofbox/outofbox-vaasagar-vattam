/** @format */

import React, { useState, useEffect } from "react";
import star from "../../assets/images/icons/star-rating.svg";
import lm from "../../assets/images/img/lm.png";
import ratings from "../../assets/images/icons/ratings-grp.png";
import ReviewBlk from "./reviewBlk";
import OfferBlk from "./offerBlk";
import EventsBlk from "./eventsBlk.js";
import PollsBlk from "./pollsBlk";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PointsBlk from "./pointsBlk";
import WishlistBlk from "./wishlistBlk";
import Main from "./core/main";

function MyAccountTab() {
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
      <Tabs>
        <div className='n-readersClubBlk'>
          <div className={toggleState === 1 ? "events-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 2 ? "reviews-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 3 ? "events-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 4 ? "offers-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={toggleState === 5 ? "points-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 6 ? "polls-bg fade-in" : "d-none"}>
            <div className='n-readersClubSec1'>
              <div className='container'>
                <div className='n-textBlk'>
                  <h1>Welcome to the Reader's Club.</h1>
                  <p>
                    A community for book lovers, where you can discuss about
                    your favourite books, participate in events and discover.
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
                      {/* <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                      </TabList> */}
                      <button
                        className={
                          toggleState === 1 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(1)}>
                        Wishlist
                      </button>
                      <button
                        className={
                          toggleState === 2 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(2)}>
                        Reviews
                      </button>
                      <button
                        className={
                          toggleState === 3 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(3)}>
                        Events
                      </button>
                      <button
                        className={
                          toggleState === 4 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(4)}>
                        Offers
                      </button>
                      <button
                        className={
                          toggleState === 5 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(5)}>
                        Points
                      </button>
                      <button
                        className={
                          toggleState === 6 ? "tabs active-tabs" : "tabs"
                        }
                        onClick={() => toggleTab(6)}>
                        Polls
                      </button>
                    </div>
                  </div>
                </div>
                <div className='content-tabs'>
                  {/* <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel> */}
                  <div
                    className={
                      toggleState === 1 ? "content  active-content" : "content"
                    }>
                    {/* <hr /> */}
                    <WishlistBlk />
                  </div>
                  <div
                    className={
                      toggleState === 2 ? "content  active-content" : "content"
                    }>
                    {/* <hr /> */}
                    <ReviewBlk />
                  </div>

                  <div
                    className={
                      toggleState === 3 ? "content  active-content" : "content"
                    }>
                    <EventsBlk />
                  </div>
                  <div
                    className={
                      toggleState === 4 ? "content  active-content" : "content"
                    }>
                    <OfferBlk />
                  </div>
                  <div
                    className={
                      toggleState === 5 ? "content  active-content" : "content"
                    }>
                    <PointsBlk />
                  </div>
                  <div
                    className={
                      toggleState === 6 ? "content  active-content" : "content"
                    }>
                    <Main />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}

export default MyAccountTab;
