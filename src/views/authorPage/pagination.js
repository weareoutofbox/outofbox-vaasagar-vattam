/** @format */

import React, { useState, useEffect } from "react";
import left from "../../assets/images/icons/left-arrow.svg";
import right from "../../assets/images/icons/right-arrow.svg";
import { SlideContainer } from "./AuthorPageElements";
const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [numberOfButtons, setNumberOfButoons] = useState(
    Math.ceil(total / showPerPage)
  );

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <SlideContainer>
         <nav aria-label='Page navigation example'>
        <ul class='pagination'>
          <li class='page-item prev'>
            <a
              class='page-link'
              id="Btn"
              //   href='!#'
              onClick={() => onButtonClick("prev")}>
              <img src={left} alt='left' />
              Previous
            </a>
          </li>

          {new Array(numberOfButtons).fill("").map((el, index) => (
            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
              <a
                class='page-link'
                // href='!#'
                onClick={() => setCounter(index + 1)}>
                {index + 1}
              </a>
            </li>
          ))}
          <li class='page-item next'>
            <a
              class='page-link'
              //   href='!#'
              onClick={() => onButtonClick("next")}>
              Next
              <img src={right} alt='next' />
            </a>
          </li>
        </ul>
      </nav>
     
    </SlideContainer>
     
  );
};
export default Pagination;
