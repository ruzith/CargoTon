import React from 'react';

import Header from './components/Header';
import Slider from './components/Slider';
import Welcome from './components/Welcome';

import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Welcome />
    
      <Services />
      <Stats />
      <Testimonials />
      <Clients />
      <News />
      <Footer />
    </>
  );
}

export default App;
