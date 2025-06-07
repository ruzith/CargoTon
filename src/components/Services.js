import React from 'react';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const servicesData = [
  {
    id: 1,
    title: 'Air Freight Services',
    description:
      'At our Auto Service garage, we are fully appreciate how difficult occur it is for people to find.',
    image: slide2,
  },
  {
    id: 2,
    title: 'Drone Services',
    description:
      'These are unique and often they differ from one industry to the other. Our logistics expertise.',
    image: slide3,
  },
];

const Services = () => {
  return (
    <section className="services-section container">
      <p className="services-subtitle">Real Solution ,Real Fast !</p>
      <h2 className="services-title">Best Global Logistics Solutions.</h2>

      <div className="services-cards">
        {servicesData.map(({ id, title, description, image }) => (
          <div key={id} className="service-card">
            <div className="service-image">
              <img src={image} alt={title} />
              <div className="service-icon">
                <span>➔</span>
              </div>
            </div>
            <div className="service-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="read-more-btn">
                Read More <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="services-footer-text">
        Logistic & Transport Solutions Saves Your Time.{' '}
        <strong>Finds Your Solutions</strong> <span>➔</span>
      </p>

      <div className="services-slider-dots">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i === 0 ? 'dot active' : 'dot'}
            aria-label={`Slide ${i + 1}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Services;
