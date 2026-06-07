import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-zinc-900">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/imagens/hero.jpeg"
          alt="Fundo"
          className="w-full h-full object-cover opacity-40"
          loading="lazy"
          decoding="async"

          style={{ objectPosition: 'center 25%' }}
        />
      </div>

      {/* Conteúdo de Hero de exemplo para contexto */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Amélia Carneiro</h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light">Especialista em Gestão de Pessoas | Desbloqueie seu potencial profissional e prepare-se para liderar. Mentorias e conteúdos práticos para quem busca crescimento, destaque e resultados reais no mercado de trabalho.</p>
        <a href="#conteudos" className="inline-block bg-white text-zinc-900 font-semibold text-lg py-4 px-8 rounded-full hover:bg-zinc-200 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
          Dar o Próximo Passo</a>
      </div>
    </section>
  );
};

export default Hero;