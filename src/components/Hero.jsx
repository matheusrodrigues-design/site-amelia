<section id="inicio" className="relative h-screen flex items-center justify-center bg-zinc-900">
  <div className="absolute inset-0 overflow-hidden">
    <img
      src="/imagens/hero.jpeg"
      alt="Fundo"
      className="w-full h-full object-cover opacity-40"
      loading="lazy"
      decoding="async"
      
      /* A modificação principal é aqui: */
      style={{ objectPosition: 'center 10%' }} 
      /* Ajuste o valor vertical '10%' conforme necessário. 
        Um valor menor (ex: '10%' ou '15%') moverá o foco visível para perto do topo da imagem (o rosto). 
        Um valor maior (ex: '50%') centralizará a imagem verticalmente (padrão).
      */
    />
  </div>
  
  {/* Conteúdo de Hero de exemplo para contexto */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Nome da Profissional</h1>
    <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light">Especialista em X | Sua Frase de Efeito</p>
  </div>
</section>