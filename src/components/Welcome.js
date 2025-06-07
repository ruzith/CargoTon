import React from 'react';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';

const Welcome = () => {
  return (
    <section className="welcome-section container">
      <div className="welcome-images">
        <div className="img-wrapper img-left">
          <img src={slide2} alt="Worker with helmet" />
        </div>
        <div className="img-wrapper img-right">
          <img src={slide1} alt="Worker with clipboard" />
          <div className="clients-box">
            <h3>15,350+</h3>
            <p>Clients Worldwide</p>
          </div>
        </div>
      </div>

      <div className="welcome-text">
        <h2>
          TransMax Logistics <br />
          Around <span className="highlight">the World</span>
        </h2>
        <p>
          Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange the worldwide trade of merchandise through land transport.
        </p>
        <p>
          Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay lean and streamlined for progress.
        </p>
        <button className="btn-more">More About Us</button>
      </div>
    </section>
  );
};

export default Welcome;
