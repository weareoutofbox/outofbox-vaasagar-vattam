/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-vv.png";
import mobLogo from "../../assets/images/logo/mob-logo.png";
import HeaderFirst from "../../../src/components/header/headerFirst";

class ReadersThankyou extends React.Component {
  render() {
    return (
      <div className='thankyouWrap'>
        <HeaderFirst />
        <div className='container thankyoulogo'>
          <div className='loginLogoBlk'>
            <img src={logo} alt='logo' className='loginLogo' />
            <div className='mobLogoBlk'>
              {/* <img src={user} alt='user' /> */}
              <div className='logoBlk'>
                <img src={mobLogo} alt='logo' className='mob' />
                {/* <p>Vaasagar Vattam</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className='tymainblk'>
          <div className='container'>
            <div className='thankyouBgBlk'></div>
            <div className='thankyouDetails'>
              <h1>Thank you for your registration.</h1>
              <p className='info'>
                Please check your email for more information.
              </p>
              <Link to='/'>
                <p className='homelink'>Go to home page</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadersThankyou;
