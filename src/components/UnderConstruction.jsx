import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <section className="pt-32 pb-24 bg-zinc-50 min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-6xl mb-6">🚧</div>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
          Conteúdo em Construção
        </h1>
        <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
          A Amélia está preparando materiais incríveis e cheios de valor para você. 
          Em breve, novos cursos e e-books estarão disponíveis. Fique de olho!
        </p>
        <Link 
          to="/" 
          className="inline-block bg-zinc-900 text-white font-semibold py-4 px-8 rounded-full hover:bg-zinc-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          Voltar para a Página Inicial
        </Link>
      </div>
    </section>
  );
};

export default UnderConstruction;