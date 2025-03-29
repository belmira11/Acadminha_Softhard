import React from 'react';

export default function VideoSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white p-6">
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
          Moeda para os estudantes da Softhard, por exemplo, se o estudante
          conseguir trazer 1 estudante ele recebe 1000 SoftCoins (equivalente a
          1000 Kwanzas) e vai acumulando até poder pagar um curso.
        </p>
        <button className="bg-[#D96A33] text-white py-2 px-6 rounded-lg hover:bg-[#D96A33] transition">
          Começar
        </button>
      </div>
    </div>
  );
}
