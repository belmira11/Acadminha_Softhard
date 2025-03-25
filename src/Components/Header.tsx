"use client";
import { useState, MouseEvent } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Ícones de menu do FontAwesome
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Logo" width={32} height={32} />
          <span className="text-orange-500 font-bold text-lg">ACADEMIA  <br/> SOFTHARD</span>
        </div>

        {/* Menu - Desktop */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <a href="#" className="hover:text-gray-900">Cursos</a>
          <a href="#" className="hover:text-gray-900">Programas</a>
          <a href="#" className="hover:text-gray-900">Comunidade</a>
          <a href="#" className="hover:text-gray-900">Entrar</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-400">
            INSCREVER-SE
          </button>
        </nav>

        {/* Botão do Menu Mobile com Ícones */}
        <button onClick={toggleMenu} className="md:hidden text-gray-800 text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <nav className="md:hidden bg-white shadow-md py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Cursos</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Programas</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Comunidade</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Entrar</a></li>
            <li>
              <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
                INSCREVER-SE
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
