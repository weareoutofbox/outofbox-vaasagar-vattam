/** @format */

import React from "react";
import Author from "../../components/featuredAuthor/author";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import HeaderFirst from "../../components/header/headerFirst";

class FeaturedAuthor extends React.Component {
  render() {
    return (
      <div className='featuredAuthorWrap'>
        <HeaderFirst />
        <Header />
        <div className='container'>
          <div className='featuredAuthorBlk'>
            <div className='heading'>
              <h1>Featured Author</h1>
            </div>
            <Author />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FeaturedAuthor;
