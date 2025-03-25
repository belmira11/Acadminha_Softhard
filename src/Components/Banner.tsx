import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    
    <div className="bg bg-white flex flex-col md:flex-row mt-12 px-6 items-center md:items-start">
      
      {/* Texto e Botões */}
      <div className="w-full md:w-1/2 pr-0 md:pr-8 text-center md:text-left">
      <br />
    
        <h1 className="text-3xl md:text-5xl font-bold mb-4 ">
          <span className="text-orange-500">Aumente</span> as suas competências 
          <br />e avance na <span className="text-orange-500">sua carreira profissional</span>
        </h1>
        
        <p className="text-gray-500 mb-6 text-sm md:text-base">
          Na Academia Softhard, oferecemos cursos online que se adaptam à sua rotina.
          <br />Não importa seu nível de conhecimento, aqui você encontra cursos que vão do 
          <br />básico ao avançado, em diversas áreas do conhecimento.
        </p>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center md:items-start">
          <Link href="/comecar" className="bg-black text-white px-8 py-3 rounded-full font-medium text-lg w-full md:w-auto text-center hover:bg-gray-800 transition">
            Começar
          </Link>
          <Link href="/demo" className="flex items-center px-4 py-3 font-medium text-gray-800 text-lg justify-center md:justify-start">
            <div className="w-10 h-10 bg-gray-100 rounded-2x1 flex items-center justify-center mr-2">
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
      
  <div className="bg-orange-500 p-6 rounded-lg flex gap-6 relative">

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

    <div className="bg-white p-3 px-4 rounded-2x1 shadow-md w-40 md:w-auto h-80 self-center">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 bg-orange-500 rounded-2x1 flex items-center justify-center mr-2">
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
