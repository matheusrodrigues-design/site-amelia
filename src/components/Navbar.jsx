import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">Amélia Carneiro</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-zinc-500">
          <a href="#inicio" className="hover:text-zinc-900 transition-colors">Início</a>
          <a href="#sobre" className="hover:text-zinc-900 transition-colors">Sobre Mim</a>
          <a href="#conteudos" className="hover:text-zinc-900 transition-colors">Conteúdos</a>
          <a href="#depoimentos" className="hover:text-zinc-900 transition-colors">Depoimentos</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;