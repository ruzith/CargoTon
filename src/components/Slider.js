import React from 'react';
import slide1 from '../assets/images/slide1.jpg'; // Your main hero image

const Slider = () => {
  return (
    <section className="slider-container">
      <div className="slider-text">
        <span className="slider-subtitle">LOGISTIC</span>
        <h1 className="slider-title">
          Best Shipping <span className="highlight">Partner</span>
        </h1>
        <p className="slider-description">
          Amet, tempus egestas facilisis volutpat viverra molestie lobortis posuere maecenas. molestie lobortis posuere maecenas. Eget sapien, gravida nequi.
        </p>
        <button className="btn-discover">Discover More</button>
      </div>
      <div className="slider-image">
        <img src={slide1} alt="Shipping Container" />
      </div>
      <div className="slider-footer">
        <div className="slider-count">2 / 2</div>
        <div className="slider-arrows">
          <button className="arrow-left">&#8592;</button>
          <button className="arrow-right">&#8594;</button>
        </div>
      </div>
      <div className="slider-hashtag">#CARGOTON LOGISTIC</div>
    </section>
  );
};

export default Slider;
