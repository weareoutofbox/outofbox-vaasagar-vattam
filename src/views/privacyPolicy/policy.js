/** @format */

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo-vv.png";
import mobLogo from "../../assets/images/logo/mob-logo.png";
import HeaderFirst from "../../../src/components/header/headerFirst";
import Header from "../../components/header/header";

class Policy extends React.Component {
  render() {
    return (
      <div className='policyWrap'>
        <HeaderFirst />
        <Header />
      </div>
    );
  }
}

export default Policy;
