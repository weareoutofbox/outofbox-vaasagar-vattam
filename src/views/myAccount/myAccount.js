/** @format */

import React from "react";
import HeaderAccount from "../../components/header/headerAccount";
import HeaderFirst from "../../components/header/headerFirst";
import MyAccountTab from "../../components/myAccount/myAccountTab";
import Footer from "../../components/footer/footer";

class MyAccount extends React.Component {
  render() {
    return (
      <div className='myAccountWrap'>
        <HeaderFirst />
        <HeaderAccount />
        <div className='n-readersClubWrap'>
          {/* <div className='myAccountSec1'>
            <div className='myAccountSec1Details'>
              <h1 className='heading'>Welcome to the Reader's Club.</h1>
              <p className='det'>
                A community for book lovers, where you can discuss about your
                favourite books, participate in events and discover.
              </p>
            </div>
          </div> */}
          <MyAccountTab />
          <Footer />
        </div>
      </div>
    );
  }
}

export default MyAccount;
