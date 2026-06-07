import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;