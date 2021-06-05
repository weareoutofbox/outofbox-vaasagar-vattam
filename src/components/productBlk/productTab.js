/** @format */

import React, { useState } from "react";
import star from "../../assets/images/icons/star-rating.svg";
import lm from "../../assets/images/img/lm.png";
import ratings from "../../assets/images/icons/ratings-grp.png";
import ViewAllReviews from "./viewAllReviews";
import CustomerReviews from "./customerReviews";

function ProductTab() {
  const [toggleState, setToggleState] = useState(1);
  const [viewAll, setViewAll] = useState(false);
  const [customer, setCustomer] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const viewAllClick = () => setViewAll(true);
  const customerClick = () => setCustomer(true);
  return (
    <div className='productTabBlk'>
      <div className='bloc-tabs'>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>
          Product Details
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>
          Customer reviews
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}>
          Reviews by professionals
        </button>
      </div>

      <div className='content-tabs'>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}>
          {/* <hr /> */}
          <div className='contentWrap1'>
            <div className='contentSec'>
              <p className='title'>Book : </p>
              <p className='answer'> Pulli aadu Pullukattu</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Category : </p>
              <p className='answer'> Lorem Ipsum</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Author : </p>
              <p className='answer'> Sandro Loren</p>
            </div>
            <div className='contentSec'>
              <p className='title'>ISBN : </p>
              <p className='answer'> 978-8194898870</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Awards : </p>
              <p className='answer'> Lorem Ipsum</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Dimensions : </p>
              <p className='answer'> 14 x 2.5 x 21.6 cm</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Book Format : </p>
              <p className='answer'> Paperback, 450 Pages</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Book Edition : </p>
              <p className='answer'> First</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Edition Language : </p>
              <p className='answer'> Tamil</p>
            </div>
            <div className='contentSec'>
              <p className='title'>Date Published : </p>
              <p className='answer'> August 10, 1999 </p>
            </div>
            <div className='contentSec'>
              <p className='title'>Publisher : </p>
              <p className='answer'> Lorem Ipsum </p>
            </div>
            <div className='contentSec'>
              <p className='title'>Tags : </p>
              <p className='answer'> Romance, Thriller, Drama, History </p>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}>
          <div className='productSecWrap'>
            <div className='contentWrap2'>
              <div className='ratingInfBlk'>
                <div className='sec1'>
                  <h2>Rating Information</h2>
                  <p className='ratingDetail'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <div className='sec2'>
                  <div className='starGrp'>
                    <img src={star} alt='star' />
                    <p className='perc'>5</p>
                    <div className='rating-bar'>
                      <div className='rate-9'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>91%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-6'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>62%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-2'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>24%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-1'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>8%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-11'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>11%</p>
                  </div>
                </div>
                <div className='sec3'>
                  <p className='ratingNumbers'>4</p>
                  <p className='totalNumber'>out of 5</p>
                  <img src={ratings} alt='ratings' />
                </div>
              </div>
            </div>
            <div className='showReviewBlk'>
              <p className='show-text'>Showing 2 of 10 reviews</p>
              <div className='reviewBox'>
                <div className='rBWrap'>
                  <div className='rBBlk'>
                    <img src={lm} alt='img' />
                    <p className='name'>Leena Maheshwari</p>
                  </div>
                  <div className='rBBlk1'>
                    <p className='text'>
                      Many desktop publishing packages and default model text,
                      and a search for 'lorem ipsum' will uncover many web sites
                      still in their infancy.
                    </p>
                    <div className='ratings'>
                      <p className='number'>4</p>
                      <img src={ratings} alt='ratings' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='reviewBox'>
                <div className='rBWrap'>
                  <div className='rBBlk'>
                    <img src={lm} alt='img' />
                    <p className='name'>Leena Maheshwari</p>
                  </div>
                  <div className='rBBlk1'>
                    <p className='text'>
                      Many desktop publishing packages and default model text,
                      and a search for 'lorem ipsum' will uncover many web sites
                      still in their infancy.
                    </p>
                    <div className='ratings'>
                      <p className='number'>4</p>
                      <img src={ratings} alt='ratings' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
            <div className={customer === true ? "d-none" : "viewBtn"}>
              <button onClick={customerClick}>View All</button>
            </div>
            <div className={customer === true ? "" : "d-none"}>
              <CustomerReviews/>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}>
          <div className='productSecWrap'>
            <div className='contentWrap2'>
              <div className='ratingInfBlk'>
                <div className='sec1'>
                  <h2>Rating Information</h2>
                  <p className='ratingDetail'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <div className='sec2'>
                  <div className='starGrp'>
                    <img src={star} alt='star' />
                    <p className='perc'>5</p>
                    <div className='rating-bar'>
                      <div className='rate-9'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>91%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-6'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>62%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-2'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>24%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-1'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>8%</p>
                  </div>
                  <div className='starGrp sg'>
                    <img src={star} alt='star' />
                    <p className='perc'>4</p>
                    <div className='rating-bar'>
                      <div className='rate-11'>
                        <span className='animate color'></span>
                      </div>
                    </div>
                    <p className='perc'>11%</p>
                  </div>
                </div>
                <div className='sec3'>
                  <p className='ratingNumbers'>4</p>
                  <p className='totalNumber'>out of 5</p>
                  <img src={ratings} alt='ratings' />
                </div>
              </div>
            </div>
            <div className='showReviewBlk'>
              <p className={viewAll === true ? "d-none" : "show-text"}>
                Showing 2 of 10 reviews
              </p>
              <p className={viewAll === true ? "show-text" : "d-none"}>
                Showing 10 of 10 reviews
              </p>
              <div className='reviewBox'>
                <div className='rBWrap'>
                  <div className='rBBlk'>
                    <img src={lm} alt='img' />
                    <div>
                      <p className='name'>Shruti Maheshwari</p>
                      <p className='brand'>Hindustan Times</p>
                    </div>
                  </div>
                  <div className='rBBlk1'>
                    <p className='text'>
                      Many desktop publishing packages and default model text,
                      and a search for 'lorem ipsum' will uncover many web sites
                      still in their infancy.
                    </p>
                    <div className='ratings'>
                      <p className='number'>4</p>
                      <img src={ratings} alt='ratings' />
                    </div>
                  </div>
                </div>
              </div>
              <div className='reviewBox'>
                <div className='rBWrap'>
                  <div className='rBBlk'>
                    <img src={lm} alt='img' />
                    <div>
                      <p className='name'>Leena Maheshwari</p>
                      <p className='brand'>Author</p>
                    </div>
                  </div>
                  <div className='rBBlk1'>
                    <p className='text'>
                      Many desktop publishing packages and default model text,
                      and a search for 'lorem ipsum' will uncover many web sites
                      still in their infancy.
                    </p>
                    <div className='ratings'>
                      <p className='number'>4</p>
                      <img src={ratings} alt='ratings' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={viewAll === true ? "d-none" : "viewBtn"}>
              <button onClick={viewAllClick}>View All</button>
            </div>
            <div className={viewAll === true ? "" : "d-none"}>
              <ViewAllReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTab;
