import React, { useState } from 'react';

const testimonialData = {
  text: `Integer congue elit non semper laoreet sed lectus orci poser nisl tempor se felis ac mauris. 
  Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. 
  Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum.`,
  author: 'John Deo',
  position: 'Managing Director',
};

const faqs = [
  { id: 1, question: 'Dui ac hendrerit elementum quam ipsum auctor lorem', answer: 'Answer 1' },
  { id: 2, question: 'Mauris vel magna a est lobortis volutpat', answer: 'Answer 2' },
  { id: 3, question: 'Sed bibendum ornare lorem mauris feugiat suspendisse neque', answer: 'Answer 3' },
  { id: 4, question: 'Nulla scelerisque dul hendrerit elementum quam', answer: 'Answer 4' },
];

const Testimonials = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (id) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  return (
    <section className="testimonials-section container">
      <div className="testimonials-left">
        <h4>TRUSTED CLIENTS</h4>
        <p className="subtitle">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
        <div className="testimonial-box">
          <span className="quote-mark">“</span>
          <p>{testimonialData.text}</p>
          <div className="testimonial-author">
            <strong>{testimonialData.author}</strong>
            <span>{testimonialData.position}</span>
          </div>
        </div>
        <div className="testimonial-nav">
          <button>&lt;</button>
          <button>&gt;</button>
        </div>
      </div>

      <div className="testimonials-right">
        <h4>WHY CHOOSE US</h4>
        <p className="subtitle">LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>
        <div className="faq-list">
          {faqs.map(({ id, question }) => (
            <div key={id} className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(id)}>
                {question}
                <span className="faq-toggle">{activeFaq === id ? '−' : '+'}</span>
              </button>
              {activeFaq === id && (
                <div className="faq-answer">
                  <p>This is the answer content for the question "{question}".</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
