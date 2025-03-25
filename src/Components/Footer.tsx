"use client";
import { useState, FormEvent } from "react";
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
    <footer className="bg-orange-500 py-10 px-6 rounded-t-3xl shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Notificação */}
        <div className="bg-purple-500 text-white p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between">
          <p className="font-bold">Receba Notificações de Atualizações e Novidades!</p>
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 text-black rounded-lg outline-none"
              required
            />
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition"
            >
              Subscrever
            </button>
          </form>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-6 text-black">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <p className="font-bold text-lg">ACADEMIA SOFTHARD</p>
            <p className="text-sm text-black">Qualquer slogan aqui</p>
          </div>

          {/* Listas de links */}
          <div className="flex flex-wrap gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i}>
                <p className="font-bold">Lista de links</p>
                {Array(6).fill("Link 123").map((link, j) => (
                  <a key={j} href="#" className="block text-sm text-black hover:text-gray-700">
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
                <FaFacebookF className="text-black hover:text-blue-600 text-xl" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-black hover:text-pink-500 text-xl" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-black hover:text-blue-700 text-xl" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-black hover:text-blue-400 text-xl" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-black hover:text-red-600 text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="my-6 border-black" />
        <p className="text-center text-sm text-black">
          © {new Date().getFullYear()} Todos os Direitos Reservados. Feito pelo{" "}
          <span className="font-bold">Laboratório Softhard</span>
        </p>
      </div>
    </footer>
  );
}

