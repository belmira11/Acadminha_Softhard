"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      alert("Por favor, insira um email válido!");
      return;
    }

    console.log("Email cadastrado:", email);
    alert("Obrigado por se inscrever! Você receberá novidades em seu email.");

    setEmail("");
  };

  return (
    <footer className="relative bg-[#D96A33] pt-14 pb-6 px-6 rounded-t-3xl shadow-lg text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Notificação (ajustada para sobrepor a div laranja) */}
       <div className="absolute top-[-25px] left-1/2 transform -translate-x-1/2 w-[75%] md:w-[60%] lg:w-[50%] bg-blue-600 text-white p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-lg">

          <p className="font-bold">Receba Notificações de Atualizações e Novidades!</p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-3 md:mt-0">
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 text-black rounded-lg outline-none w-60"
              required
            />
            <button
              type="submit"
              className="bg-[#D96A33] text-white px-5 py-2 rounded-lg hover:bg-[#d96a33ec] transition"
            >
              Subscrever
            </button>
          </form>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-12 text-white">
          {/* Logo */}
    
<div className="mb-6 md:mb-0 flex items-center space-x-3">
  <Image 
    src="/academia-white (1).png" 
    alt="Logo Academia Softhard" 
    width={48} 
    height={48} 
    className="w-12 h-12"
  />
  <div>
    <p className="font-bold text-lg">ACADEMIA SOFTHARD</p>
    <p className="text-sm">Qualquer slogan aqui</p>
  </div>
</div>


          {/* Listas de links */}
          <div className="flex flex-wrap gap-12">
            {[1, 2, 3].map((_, i) => (
              <div key={i}>
                <p className="font-bold">Lista de links</p>
                {Array(6).fill("Link 123").map((link, j) => (
                  <a key={j} href="#" className="block text-sm hover:text-gray-300">
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Redes Sociais */}
          <div className="mt-6 md:mt-0">
            <p className="font-bold">Redes Sociais</p>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-white hover:text-blue-600 text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white hover:text-pink-500 text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-white hover:text-blue-700 text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-white hover:text-blue-400 text-xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-white hover:text-red-600 text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-6 border-white" />
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Todos os Direitos Reservados. Feito pelo <span className="font-bold text-black">Laboratório Softhard</span>
        </p>
      </div>
    </footer>
  );
}

