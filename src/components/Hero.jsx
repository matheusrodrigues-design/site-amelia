import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
          alt="Fundo" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 text-center px-6 mt-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
          Nome da Sua Esposa
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 font-light max-w-2xl mx-auto">
          Transformando líderes e potencializando equipes através da gestão humana.
        </p>
      </div>
    </section>
  );
};

export default Hero;