import React from 'react';

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 text-center mb-16">O que dizem sobre mim</h2>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Depoimento 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-zinc-200 rounded-full mb-6 overflow-hidden flex items-center justify-center">
               <span className="text-sm text-zinc-500">Sua Foto/Vídeo</span>
            </div>
            <p className="text-zinc-600 italic mb-6">
              "A mentoria abriu meus olhos para falhas que eu cometia na minha equipe há anos. Em dois meses de aplicação, reduzimos nossa rotatividade em 30%."
            </p>
            <div>
              <h4 className="font-bold text-zinc-900">João da Silva</h4>
              <span className="text-sm text-zinc-500">Coordenador de RH</span>
            </div>
          </div>

          {/* Depoimento 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-32 h-32 bg-zinc-200 rounded-full mb-6 overflow-hidden flex items-center justify-center">
               <span className="text-sm text-zinc-500">Sua Foto/Vídeo</span>
            </div>
            <p className="text-zinc-600 italic mb-6">
              "O curso sobre feedback mudou completamente a cultura da nossa empresa. Material impecável, direto e extremamente prático."
            </p>
            <div>
              <h4 className="font-bold text-zinc-900">Maria Fernanda</h4>
              <span className="text-sm text-zinc-500">CEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;