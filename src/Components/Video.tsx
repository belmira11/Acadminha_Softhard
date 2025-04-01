import React from 'react';

export default function VideoSection() {
  return (
    <div className="bg-while flex flex-col md:flex-row items-center justify-center min-h-screen  p-6">
      <div className="w-full md:w-1/2 flex justify-center h-[350px] md:h-[450px]">
        {/* Vídeo Responsivo */}
        <div className="w-full max-w-lg h-full bg-black rounded-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/SEU_VIDEO_ID"
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Texto e botão */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 h-auto md:h-[450px] flex flex-col justify-center">
        <h2 className="text-xl md:text-2xl font-bold mb-4">Posso lhe contar um segredo?</h2>
        <p className="text-gray-600 text-sm md:text-base mb-4">
          O Conhecimento Certo pode Mudar Tudo - Abrir Portas, Criar 
          Oportuniddes E Transformar Vidas. No Academia Softhard, Não 
          Oferecemos Apenas Cursos, Oferecemos Um Caminho Para o
          Teu Sucesso Mas Não Vamos Só Contar-te Isso, Queremos 
          Mostrar-Te Assite Ao Video E Descobre Como Tudo Começou 
        </p>
        <button className="bg-black text-white px-6 py-2 rounded-full font-medium text-lg w-40 text-center hover:bg-gray-800 transition">
        Começar
       </button>

      </div>
    </div>
  );
}
