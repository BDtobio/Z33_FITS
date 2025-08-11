"use client";

import { useState } from "react";
import { navConfig, NavItem } from "@/config/NavConfig";
import Link from "next/link";

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Menú desplegable */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white shadow-md z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navConfig.map((el: NavItem) => (
              <Link
                key={`/${el.path}`}
                href={el.path}
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                className="text-lg hover:text-red-500"
              >
                {el.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
