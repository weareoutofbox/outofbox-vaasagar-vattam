/** @format */

import React from "react";
import HeaderFirst from "../../components/header/headerFirst";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import ReadersTab from "../../components/readersClub/readersTab";

class ReadersClub extends React.Component {
  render() {
    return (
      <div className='n-readersClubWrap'>
        <HeaderFirst />
        <Header />

        {/* <div className='n-readersClubBlk'>
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
          <div className='n-readersClubSec2'>
            <div className='container readersscroll'>
              <ReadersTab />
            </div>
          </div>
        </div> */}
        <ReadersTab />
        <Footer />
      </div>
    );
  }
}

export default ReadersClub;
