import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/landingpage/Navbar';
import Hero from './components/landingpage/Hero';
import Testimonial from './components/landingpage/Testimonial';
import CallToAction from './components/landingpage/CallToAction';
import Footer from './components/landingpage/Footer';

function App2() {
  return (
    <div className="app2-container">
      <Navbar />
      <Hero id='hero' />
      <Testimonial id='features' />
      <CallToAction id='cta' />
      <Footer />
    </div>
   
  );
}

export default App2;