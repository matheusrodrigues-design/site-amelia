import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:flex items-center gap-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="aspect-[4/5] rounded-2xl bg-zinc-100 overflow-hidden shadow-lg">
            <img
              src="/imagens/about.jpeg"
              alt="Fundo"
              className="w-full h-full object-cover opacity-40"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Sobre Mim</h2>
          <div className="text-zinc-600 leading-relaxed space-y-4">
            <p>
              Com mais de X anos de experiência em Recursos Humanos e Desenvolvimento de Lideranças, minha paixão é conectar o potencial humano aos resultados de negócios.
            </p>
            <p>
              Acredito que ambientes saudáveis constroem profissionais mais fortes. Meu objetivo aqui é compartilhar as metodologias e ferramentas que validei ao longo de anos no mercado corporativo, para que você possa aplicar na sua equipe de forma prática e direta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;