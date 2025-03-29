import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    
    <div className="bg bg-white flex flex-col md:flex-row mt-12 px-6 items-start text-left">
  
    {/* Texto e Botões */}
    <div className="w-full max-w-xl flex flex-col justify-center h-full mt-24 md:mt-28">
      <h1 className="text-lg md:text-xl font-bold mb-4">
        <span className="text-[#D96A33]">Aumente</span> as suas competências 
        <br />e avance na <span className="text-[#D96A33]">sua carreira profissional</span>
      </h1>
      
      <p className="text-base md:text-lg text-gray-500 mb-6">
        Na Academia Softhard, oferecemos cursos online que se adaptam à sua rotina.
        Não importa seu nível de conhecimento, aqui você encontra cursos que vão do 
        básico ao avançado, em diversas áreas do conhecimento.
      </p>
    
    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
      <Link href="/comecar" className="bg-black text-white px-6 py-2 rounded-full font-medium text-lg w-full md:w-auto text-center hover:bg-gray-800 transition">
        Começar
      </Link>
      <Link href="/demo" className="flex items-center px-6 py-2 font-medium text-gray-800 text-lg">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 3L19 12L5 21V3Z" fill="black"/>
          </svg>
        </div>
        Ver Demo
      </Link>
    </div>
  </div>
{/* Imagem e Card */}
<div className="w-full md:w-1/2 relative mt-6 md:mt-0">
<br />
      
  <div className="bg-[#D96A33] p-6 rounded-lg flex gap-6 relative">

    {/* Imagem à esquerda */}
    <div className="relative w-[250px] md:w-[350px] h-60 md:h-[400px] rounded-lg overflow-hidden">
      <Image 
        src="/jovem.jpeg" 
        alt="Estudante usando laptop" 
        layout="fill" 
        objectFit="cover"
        className="rounded-lg"
      />
    </div>

    {/* Card branco alinhado à direita com mais espaço da imagem */}

    <div className="absolute top-4 right-4 bg-white p-3 md:p-4 rounded-xl shadow-md w-42 md:w-60 h-auto flex flex-col items-center z-10">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-[#D96A33] rounded-2x1 flex items-center justify-center mr-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5H4C3.44772 5 3 5.44772 3 6V20C3 20.5523 3.44772 21 4 21H18C18.5523 21 19 20 19 20V16M12 9L22 9M22 9L18 5M22 9L18 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <h3 className="text-xs md:text-lg font-bold">Simplificando o Processo de Aprendizagem!</h3>
    </div>

  </div>
</div>
    </div>
  );
}
