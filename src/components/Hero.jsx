import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-zinc-900">
      {/* CAMADA 1: Fundo Desfocado (O truque do "Zoomout") */}
      <div className="absolute inset-0 z-0">
        <img
          src="/imagens/hero.jpeg"
          alt="Fundo Desfocado"
          /* Usamos object-cover aqui para preencher tudo, mas aplicamos um desfoque pesado (blur-3xl), escurecemos (opacity-30) e ampliamos (scale-150) para esconder as bordas nítidas. */
          className="w-full h-full object-cover scale-150 blur-3xl opacity-30"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* CAMADA 2: A foto real no centro, com zoom-out */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-6 md:p-12">
        {/* Usamos object-contain aqui. Isso reduz a imagem para caber inteira no espaço, dando o efeito de zoomout. O max-h-[85vh] garante que ela não toque no topo ou fundo da tela. */}
        <img
          src="/imagens/hero.jpeg"
          alt="Foto de Perfil Zoomout"
          className="h-full w-auto object-contain rounded-2xl shadow-2xl"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Conteúdo de Hero de exemplo para contexto */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Amélia Carneiro</h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light">Especialista em Gestão de Pessoas | Transformando Lideranças</p>
      </div>
    </section>
  );
};

export default Hero;