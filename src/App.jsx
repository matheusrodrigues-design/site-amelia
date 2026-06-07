import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Mentorship from './components/Mentorship';
import UnderConstruction from './components/UnderConstruction';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 scroll-smooth flex flex-col relative">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentoria" element={<Mentorship />} />
            <Route path="/em-construcao" element={<UnderConstruction />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton /> 
      </div>
    </Router>
  );
};

export default App;