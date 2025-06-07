import React from 'react';
import slide1 from '../assets/images/slide1.jpg';
import slide2 from '../assets/images/slide2.jpg';
import slide3 from '../assets/images/slide3.jpg';

const newsItems = [
  {
    id: 1,
    date: '26',
    month: 'MAY',
    title: 'Curabitur Lorem Uism Quis',
    author: 'Admin',
    comments: 15,
    image: slide1,
    description:
      'Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...',
    featured: true,
  },
  {
    id: 2,
    date: '22',
    month: 'MAY',
    title: 'Curabitur Lorem Uism Quis',
    author: 'Admin',
    comments: 15,
    image: slide2,
    description:
      'Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...',
    featured: false,
  },
  {
    id: 3,
    date: '20',
    month: 'MAY',
    title: 'Curabitur Lorem Uism Quis',
    author: 'Admin',
    comments: 15,
    image: slide3,
    description:
      'Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...',
    featured: false,
  },
  {
    id: 4,
    date: '15',
    month: 'MAY',
    title: 'Curabitur Lorem Uism Quis',
    author: 'Admin',
    comments: 15,
    image: slide1,
    description:
      'Pellentesque habitant morbi tristique sene ctus eft netus eft malesuada fames turpis egestas. Aenean non donec ...',
    featured: false,
  },
];

const News = () => {
  return (
    <section className="news-section container">
      <h2 className="news-header">LATEST NEWS</h2>
      <p className="news-subtitle">INTEGER CONGUE ELIT</p>

      <div className="news-grid">
        {newsItems.map(({ id, date, month, title, author, comments, image, description, featured }, index) => (
          <article
            key={id}
            className={`news-card ${featured ? 'featured' : ''} ${index % 2 === 0 ? 'image-left' : 'image-right'}`}
          >
            <div className="news-image-wrapper">
              <img src={image} alt={title} />
              <div className="news-date">
                <span className="date-number">{date}</span>
                <span className="date-month">{month}</span>
              </div>
            </div>

            <div className="news-content">
              <h3 className="news-title">{title}</h3>
              <div className="news-meta">
                <span className="author">{author}</span>
                <span className="comments">{comments}</span>
              </div>
              <p className="news-description">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
