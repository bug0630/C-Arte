import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Carousel.scss';

const Carousel = ({ images, comments, pageLinks, intervalTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  const goToPrevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  let interval;
  useEffect(() => {
    interval = setInterval(goToNextSlide, intervalTime);
    return () => clearInterval(interval);
  }, [currentIndex, goToNextSlide, intervalTime]);

  const mouseEnter = () => {
    clearInterval(interval);
  };

  const mouseLeave = () => {
    interval = setInterval(goToNextSlide, intervalTime);
  };
  return (
    <div className="carouselContainer ">
      <Link to={pageLinks[currentIndex]}>
        {' '}
        <div className="slide">
          {[0, 1, 2].map((offset) => (
            <img
              onMouseEnter={
                offset === 1
                  ? mouseEnter
                  : () => {
                      return;
                    }
              }
              onMouseLeave={
                offset === 1
                  ? mouseLeave
                  : () => {
                      return;
                    }
              }
              key={currentIndex + offset}
              src={images[(currentIndex + offset) % images.length]}
              alt="slide"
            />
          ))}
        </div>
      </Link>
      <button className="prev" onClick={goToPrevSlide}>
        <img
          src="https://bug0630.github.io/C-Arte/images/arrow_icon.svg"
          alt="arrow-icon"
        ></img>
      </button>
      <button className="next" onClick={goToNextSlide}>
        <img
          src="https://bug0630.github.io/C-Arte/images/arrow_icon.svg"
          alt="arrow-icon"
        ></img>
      </button>
      <div className="comment">{comments[currentIndex]}</div>
    </div>
  );
};

export default Carousel;
