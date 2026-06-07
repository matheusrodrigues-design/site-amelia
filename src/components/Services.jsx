import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="conteudos" className="py-24 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">Meus Conteúdos e Serviços</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mentoria */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="text-3xl mb-6">🤝</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Mentoria Individual</h3>
            <p className="text-zinc-600 mb-8 flex-grow">
              Encontros focados no seu momento de carreira. Vamos traçar um plano de ação para os seus desafios atuais de gestão e liderança.
            </p>
            <Link to="/mentoria" className="text-center bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors w-full">
              Saber Mais
            </Link>
          </div>

          {/* Cursos */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="text-3xl mb-6">🎓</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Cursos Online</h3>
            <p className="text-zinc-600 mb-8 flex-grow">
              Treinamentos gravados direto ao ponto. Aprenda a estruturar feedbacks, conduzir avaliações e criar uma cultura forte na sua empresa.
            </p>
            <Link to="/em-construcao" className="text-center bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors w-full">
              Ver Cursos
            </Link>
          </div>

          {/* E-books */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="text-3xl mb-6">📚</div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">E-books</h3>
            <p className="text-zinc-600 mb-8 flex-grow">
              Guias em PDF, planilhas e templates prontos para você baixar e começar a usar hoje mesmo com a sua equipe.
            </p>
            <Link to="/em-construcao" className="text-center bg-zinc-900 text-white py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors w-full">
              Baixar Materiais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;