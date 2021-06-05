/** @format */

import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

// import { useState } from 'react';
const { useState, useEffect } = React;

const Loader = ({ progress, message }) => {
  return (
    <div className='home-loader-container'>
      <div className='home-loader'>
        <div className='home-loader-bar' style={{ width: `${progress}%` }} />
      </div>
      {/* <span className='home-loading-text'>
        {message ? message : "Loading..."}
      </span> */}
    </div>
  );
};

// Ignore this component, it is a simple wrapper to simulate the progress changing
const Tester = () => {
  const [progress, setProgress] = useState(5);

  useEffect(() => {
    let timer = window.setTimeout(function () {
      if (progress < 100) {
        const newProgress = progress + 10;
        setProgress(newProgress);
      } else {
        window.clearTimeout(timer);
        setProgress(10);
      }
    }, 1300);
    return () => {
      //   window.clearTimeout(timer);
    };
  }, [progress]);

  return <Loader progress={progress} />;
};

// ReactDOM.render(<Tester />);
export default Tester;
