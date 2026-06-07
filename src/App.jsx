import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* HEADER / HERO SECTION */}
      <header className="bg-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nome da Sua Esposa
        </h1>
        <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
          Especialista em Gestão de Pessoas | Mentora | Autora
        </p>
        <p className="mt-6 text-indigo-100 max-w-xl mx-auto">
          Desenvolva sua carreira, melhore a gestão da sua equipe e alcance seu potencial máximo com conteúdos práticos e mentoria exclusiva.
        </p>
      </header>

      {/* ABOUT SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">Sobre Mim</h2>
        <p className="text-lg leading-relaxed text-gray-600">
          Com mais de X anos de experiência em Recursos Humanos e Liderança, minha missão é ajudar profissionais e empresas a construírem ambientes de trabalho mais saudáveis e produtivos. Aqui você encontra as ferramentas certas para o seu desenvolvimento.
        </p>
      </section>

      {/* SERVICES / PRODUCTS SECTION */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-600">Meus Conteúdos e Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Cursos */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-3">Cursos Online</h3>
              <p className="text-gray-600 mb-6">
                Aprenda no seu ritmo com aulas gravadas sobre liderança, feedback, cultura organizacional e muito mais.
              </p>
              <a href="#" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                Ver Cursos
              </a>
            </div>

            {/* Card 2: E-books */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3">E-books</h3>
              <p className="text-gray-600 mb-6">
                Materiais ricos e práticos em formato digital. Guias passo a passo para aplicar no seu dia a dia profissional.
              </p>
              <a href="#" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                Baixar E-books
              </a>
            </div>

            {/* Card 3: Mentoria */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Mentoria Individual</h3>
              <p className="text-gray-600 mb-6">
                Acompanhamento personalizado para gestores e profissionais de RH que buscam acelerar seus resultados.
              </p>
              <a href="#" className="inline-block bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition-colors">
                Agendar Sessão
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-300 py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="mb-4">Pronto para transformar sua carreira?</p>
          <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">E-mail</a>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Nome da Sua Esposa. Todos os direitos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default App;