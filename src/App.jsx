import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Mentorship from './components/Mentorship';
import Footer from './components/Footer';

// Criamos um "pacote" com os componentes da página inicial
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
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 scroll-smooth flex flex-col">
        <Navbar />
        
        {/* A área principal onde as páginas vão trocar */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mentoria" element={<Mentorship />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;