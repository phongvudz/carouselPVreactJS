import React, { useEffect, useState } from "react";
import "../style/Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  let timeOut = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 2500);
  });

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoPlay(true)}
    >
      <div className="carousel__wrapper">
        {images.map((image, index) => (
          <div
            className={
              index === current
                ? "carousel__card carousel__card-active"
                : "carousel__card"
            }
            key={index}
          >
            <img className="card__image" src={image.image} alt={image.title} />
            <div className="carousel__overplay">
              <h1 className="carousel__title">{image.title}</h1>
            </div>
          </div>
        ))}
        <div className="carousel__arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel__arrow_right" onClick={slideRight}>
          &rsaquo;
        </div>
        <div className="carousel__pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={
                index === current
                  ? "pagination__dot pagination__dot-active"
                  : "pagination__dot"
              }
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
