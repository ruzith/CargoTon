import React from 'react';

import client1 from '../assets/images/client1.png';
import client2 from '../assets/images/client2.png';
import client3 from '../assets/images/client3.png';
import client4 from '../assets/images/client4.png';
import client5 from '../assets/images/client5.png';

const Clients = () => {
  return (
    <section className="clients-section container">
      <div className="client-logos">
        {[client1, client2, client3, client4, client5].map((logo, index) => (
          <img key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
