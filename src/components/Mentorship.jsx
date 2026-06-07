import React from 'react';

const Mentorship = () => {
  return (
    <section id="mentoria" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:flex items-center gap-16">
        
        {/* Lado Esquerdo: Textos e Botão */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-zinc-900 uppercase bg-zinc-100 rounded-full">
            Atendimento Exclusivo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6 tracking-tight">
            Mentoria Individual
          </h2>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
            Um acompanhamento próximo e personalizado focado no seu momento profissional. Juntas, vamos identificar seus pontos fortes, superar desafios de liderança e traçar um plano de ação para você alcançar novos cargos e resultados.
          </p>
          
          <ul className="space-y-4 mb-10 text-zinc-600">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Encontros online de 1 hora focados na sua realidade.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Análise do seu perfil comportamental e de liderança.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              <span>Construção de um Plano de Desenvolvimento prático.</span>
            </li>
          </ul>

          {/* O link da agenda entra no href abaixo. 
              O target="_blank" faz abrir em uma nova aba para não fechar o site dela. */}
          <a 
            href="https://calendar.app.google/FsPqTDCU1dHfWDM49" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block w-full sm:w-auto text-center bg-zinc-900 text-white font-semibold py-4 px-8 rounded-lg hover:bg-zinc-800 transition-colors shadow-md hover:shadow-lg"
          >
            Ver Horários Disponíveis
          </a>
          <p className="mt-4 text-sm text-zinc-500 sm:text-left text-center">
            Você será direcionado para a agenda online.
          </p>
        </div>

        {/* Lado Direito: Imagem Ilustrativa */}
        <div className="md:w-1/2">
           <div className="aspect-square rounded-2xl bg-zinc-100 overflow-hidden shadow-lg">
             {/* Idealmente uma foto dela em uma chamada de vídeo ou trabalhando com um notebook */}
             <img 
               src="/imagens/mentorship.jpeg" 
               alt="Sessão de Mentoria Online" 
               className="w-full h-full object-cover"
               loading="lazy"
               decoding="async"
             />
           </div>
        </div>

      </div>
    </section>
  );
};

export default Mentorship;