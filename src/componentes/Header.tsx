"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto">
        <ul className="md:flex flex-col sm:flex-row justify-around py-12 text-white font-semibold text-lg hidden">
          <li className="hover:text-yellow-500">
            <Link href="/">INICIO</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/produtos">PRODUTOS</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/sobre">QUEM SOMOS</Link>
          </li>
          <li className="hover:text-yellow-500">
            <Link href="/contato">CONTATO</Link>
          </li>
        </ul>
        {menuOpen ? (
          ""
        ) : (
          <button
            onClick={toggleMenu}
            className="md:hidden focus:outline-none "
          >
            <div className="relative w-10 h-10 flex flex-col justify-between items-center top-10 left-10">
              <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
              <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
              <span className="block w-full h-1 bg-yellow-500 rounded-md"></span>
            </div>
          </button>
        )}
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 bg-neutral-700 flex flex-col items-center text-white animate-slide-in z-50">
          <button
            onClick={toggleMenu}
            className="absolute top-10 right-10 focus:outline-none"
          >
            <div className="relative w-10 h-1 flex flex-col justify-between items-center mt-6">
              <span className="absolute block w-full h-1 bg-yellow-500 -rotate-45" />
              <span className="absolute block w-full h-1 bg-yellow-500 transform rotate-45" />
            </div>
          </button>
          <ul className="space-y-12 sm:space-y-14 text-xl text-center mt-[20%]">
            <li className="hover:text-blue-400">
              <Link href="/" onClick={closeMenu}>
                INÍCIO
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/sobre" onClick={closeMenu}>
                SOBRE NÓS
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/produtos" onClick={closeMenu}>
                PRODUTOS
              </Link>
            </li>
            <li className="hover:text-blue-400">
              <Link href="/contato" onClick={closeMenu}>
                CONTATO
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
