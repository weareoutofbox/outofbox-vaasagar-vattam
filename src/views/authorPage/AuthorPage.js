/** @format */

import React, { useEffect, useState } from "react";
import { Link, useLocation, NavLink, Route, Switch } from "react-router-dom";
import Header from "../../components/header/header";
import HeaderFirst from "../../components/header/headerFirst";
import {
  AuthorWrap,
  AuthorDesc,
  AuthorBook,
  AuthorBookWrap,
} from "./AuthorPageElements";
import authImage from "../../assets/images/Naren/auth-img.png";
import AuthorBooks from "./AuthorBooks";
import Footer from "../../components/footer/footer";
import AuthorInterview from "./AuthorInterview";
import AuthorNews from "./AuthorNews";
import AuthorVideos from "./AuthorVideos";

export default function AuthorPage() {
  const location = useLocation();

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className='m-AuthorWrap'>
      <HeaderFirst />
      <Header />
      <AuthorWrap>
        <AuthorDesc>
          <div className='m-AuthorDetailsLeft'>
            <img src={authImage} alt='' />
          </div>
          <div className='m-AuthorDetailsRight'>
            <h1>Sandro Loren</h1>
            <div className='m-AuthorGenre'>
              <Link to='/category/Romance'>Romance</Link>
              <Link to='/category/Thriller'>Thriller</Link>
              <Link to='/category/Drama'>Drama</Link>
              <Link to='/category/History'>History</Link>
            </div>
            <p id='authorDescPara1'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p id='authorDescPara2'>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. It is a
              long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using it.
            </p>
            <p id='Awards'>
              America Award, Dayton Literary Peace Prize, Vishnupuram Award{" "}
            </p>
          </div>
        </AuthorDesc>
        <div className='bloc-tabs'>
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}>
            Books
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}>
            Interviews
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}>
            News
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}>
            Videos
          </button>
        </div>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          <div className='authorName'>
            <h1>All Books By Sandro Loren</h1>
          </div>
          <AuthorBooks />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}>
          <AuthorInterview />
        </div>
        <div
          className={toggleState === 3 ? "content active-content" : "content"}>
          <AuthorNews />
        </div>
        <div
          className={toggleState === 4 ? "content active-content" : "content"}>
          <AuthorVideos />
        </div>
      </AuthorWrap>
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
