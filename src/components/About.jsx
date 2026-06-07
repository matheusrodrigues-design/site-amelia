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
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Sobre Mim</h2>
          <div className="text-zinc-600 leading-relaxed space-y-4">
            <p>
              Olá, eu sou Amélia Carneiro.
            </p>
            <p>
              Sou Bacharel em Direito, atuo há mais de 5 anos com gestão de pessoas, desenvolvimento de equipes e formação de lideranças.
            </p>
            <p>
              Minha trajetória profissional começou como Auxiliar Jurídico na Conservadora Campos, em Belo Horizonte, onde desenvolvi habilidades fundamentais relacionadas à organização, responsabilidade profissional e gestão de demandas.
            </p>
            <p>
              Posteriormente, iniciei minha trajetória na SÓ Multas, a maior referência em Direito de Trânsito do Brasil. Foi nessa experiência que comecei a construir minha visão sobre gestão, operações e desenvolvimento de pessoas.
            </p>
            <p>
              Durante minha graduação em Direito, tive a oportunidade de atuar como estagiária no Tribunal de Justiça de Minas Gerais, experiência que ampliou minha visão profissional e fortaleceu competências como análise, disciplina, comprometimento e responsabilidade.
            </p>
            <p>
              Após esse período, retornei à SÓ Multas, onde dei continuidade à minha trajetória de crescimento profissional. Ao longo dos anos, assumi novos desafios, desenvolvi equipes, participei da estruturação de processos, conduzi treinamentos, realizei mentorias e contribui diretamente para o crescimento de pessoas e resultados, até alcançar a posição de Gerente Operacional.
            </p>
            <p>
              Essa jornada me ensinou que crescimento profissional não acontece por acaso. Ele é resultado de aprendizado constante, responsabilidade, confiabilidade e da capacidade de transformar desafios em oportunidades.
            </p>
            <p>
              Cheguei até aqui entendendo algumas coisas:
            </p>
            <ul className="space-y-4 mb-10 text-zinc-600">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span> Liderança não é cargo, é influência.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span> Confiabilidade é fazer o que precisa ser feito, mesmo quando ninguém está olhando.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Resultados extraordinários são construídos por pessoas que assumem a responsabilidade pelo próprio desenvolvimento.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-zinc-900 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>O conhecimento só gera transformação quando é colocado em prática.</span>
              </li>
            </ul>
            <p>
              Foi a partir dessas experiências que nasceu o desejo de compartilhar tudo o que aprendi ao longo da minha trajetória.
            </p>
            <p>
              Hoje, por meio de cursos, mentorias, treinamentos e conteúdos, ajudo profissionais a desenvolverem suas habilidades, fortalecerem sua liderança, desenvolverem equipes de alta performance e acelerarem seu crescimento pessoal e profissional.
            </p>
            <p>
              Meu propósito é mostrar que não importa onde você começa. Com as estratégias certas, disciplina, conhecimento e desenvolvimento contínuo, é possível construir uma trajetória de crescimento, impacto e realização.
            </p>
            <p className="text-zinc-800 text-lg font-medium">
              <svg className="w-5 h-5 inline-block mr-2 mb-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              Minha história é a prova de que o crescimento é construído diariamente. Cada etapa da minha jornada — da área jurídica à gestão operacional — contribuiu para a profissional e líder que sou hoje.
            </p>
            <p>
              Seja bem-vindo(a). Aqui você encontrará conhecimento, ferramentas e direcionamento para transformar potencial em resultado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;