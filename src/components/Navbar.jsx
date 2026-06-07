import React from 'react';

const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Nome */}
        <div className="text-xl font-bold tracking-tight text-zinc-900">
          Amélia Carneiro
        </div>
        
        {/* Menu Desktop (Escondido no mobile) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500">
          <a href="/#inicio" className="hover:text-zinc-900 transition-colors">Início</a>
          <a href="/#sobre" className="hover:text-zinc-900 transition-colors">Sobre Mim</a>
          <a href="/#conteudos" className="hover:text-zinc-900 transition-colors">Conteúdos</a>
          <a href="/#depoimentos" className="hover:text-zinc-900 transition-colors">Depoimentos</a>
        </div>

        {/* Botão Toggle Mobile (Escondido no desktop) */}
        <button 
          className="md:hidden text-zinc-600 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Alternar menu"
        >
          {isOpen ? (
            // Ícone de Fechar (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone de Hamburger (3 barras)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile Dropdown (Só aparece se isOpen for true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 shadow-lg">
          <div className="flex flex-col px-6 py-4 space-y-4 text-base font-medium text-zinc-600">
            <a href="/#inicio" onClick={closeMenu} className="hover:text-zinc-900 transition-colors">Início</a>
            <a href="/#sobre" onClick={closeMenu} className="hover:text-zinc-900 transition-colors">Sobre Mim</a>
            <a href="/#conteudos" onClick={closeMenu} className="hover:text-zinc-900 transition-colors">Conteúdos</a>
            <a href="/#depoimentos" onClick={closeMenu} className="hover:text-zinc-900 transition-colors">Depoimentos</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;