/** @format */

import React from "react";
import dollar from "../../assets/images/icons/dollar.svg";
class PointsBlk extends React.Component {
  render() {
    return (
      <div className='n-pointsBlkWrap'>
        <div className='container'>
          <div className='pointsBlkSec1'>
            <div className='pointSec1'>
              <h1>Total Points Earned</h1>
              <p className='n-dollarWrap'>
                <img src={dollar} alt='dollar' />
                <p className='number'>12</p>
              </p>
            </div>
            <div className='pointSec2'>
              <ul>
                <li>Now, earn 2 points after reviewing every product.</li>
                <li>Earn 2 points after attending each event.</li>
                <li>Earn 1 point after buying every product. </li>
              </ul>
            </div>
          </div>
          <div className='pointsBlkSec2'>
            <div className='n-pointSec21'>
              <p className='title'>Activities</p>
              <div className='n-activitiesList'>
                <ul className='n-activitiesListBlk'>
                  <li className='title'>Pulli Aadu Pullukattu</li>
                  <li className='det'>
                    Purchased (<span className='no'>1</span>) Review given (
                    <span className='no'>2</span>)
                  </li>
                </ul>
                <ul className='n-activitiesListBlk'>
                  <li className='title'>Diabetes Emystified</li>
                  <li className='det'>
                    Purchased (<span className='no'>1</span>){" "}
                  </li>
                </ul>
                <ul className='n-activitiesListBlk'>
                  <li className='title'>O.C C.M</li>
                  <li className='det'>
                    Purchased (<span className='no'>1</span>) Review given (
                    <span className='no'>2</span>)
                  </li>
                </ul>
                <ul className='n-activitiesListBlk'>
                  <li className='title'>Ponnana Vakku Wrapper</li>
                  <li className='det'>
                    Event attended (<span className='no'>2</span>)
                  </li>
                </ul>
                <ul className='n-activitiesListBlk'>
                  <li className='title'>Lorem Ipsum event</li>
                  <li className='det'>
                    Purchased (<span className='no'>1</span>) Review given (
                    <span className='no'>2</span>)
                  </li>
                </ul>
              </div>
            </div>
            <div className='n-pointSec22'>
              <p className='title'>Points Earned</p>
              <div className='n-pointList'>
                <p>3</p>
                <p className='pt-30'>1</p>
                <p className='pt-30'>3</p>
                <p className='pt-30'>2</p>
                <p className='pt-30'>2</p>
              </div>
            </div>
          </div>
          <div className='d-flex'>
            <div></div>
            <p className='n-pointsTotalWrap'>
              <p className='n-pointsTotal'>Total Points</p>
              <span>12</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PointsBlk;
