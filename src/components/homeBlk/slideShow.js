/** @format */

import React from "react";
import banner from "../../assets/images/banner/Home-Banner.png";
import ProgressBar from "../../components/homeBlk/progressBar";
const img = [
  "url(/static/media/Home-Banner.e5567c2d.png)",
  "url(/static/media/Home-Banner.e5567c2d.png)",
  //   "url(/static/media/Home-Banner.e5567c2d.png)",
  //   "url(/static/media/Home-Banner.e5567c2d.png)",
];
const delay = 5000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className='slideshow bannerImageCarousel'>
      <div
        className='slideshowSlider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {img.map((background, index) => (
          <div
            className='bannerImageCarousel'
            key={index}
            style={{ background }}>
            {" "}
            <div className='title'>
              <h1>Tamilnadu Murder</h1>
              <p className='name'>
                Krishnan Swaminathan<span></span>Thriller
              </p>
              <div className='text'>
                <p className='desk'>
                  Lorem Ipsum is simply dummy text of the printing and <br />
                  typesetting industry. Lorem Ipsum has been the industry's{" "}
                  <br /> standard dummy text ever since the 1500s,
                </p>
                <p class='text-mob'>
                  Lorem Ipsum is simply dummy text of the
                  <br /> printing and typesetting industry...
                  <span className='read-more'>Read more</span>
                </p>
              </div>
              <div className='price'>
                <p> ₹ 115</p>
                <strike> ₹ 150</strike>
              </div>
              <div className='buyNow'>
                <button>Buy Now</button>
                <div className='sliderPagination'>
                  <p>1</p>
                  {/* <ProgressBar /> */}
                  <div className='hrrs'>
                    <div className='hrr'></div>
                  </div>
                  <p class='pl-50'>2</p>
                  <p>3</p>
                  <p>4</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className='hrrs'>
          <div className='hrr'></div>
        </div>
        <div className='slideshowDots'>
          {img.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slideshow;
