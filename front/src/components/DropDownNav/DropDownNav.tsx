"use client";

import { useState } from "react";
import { navConfig, NavItem } from "@/config/NavConfig";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function NavbarClient() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin } = useAuth(); // ⭐ AHORA LEEMOS AUTH

  // Filtrado igual que en navbar desktop
  const filteredNav = navConfig.filter((item: NavItem) => {
    // ADMIN solo ve role:"admin" o role:"all"
    if (isAdmin) {
      if (item.role !== "admin" && item.role !== "all") return false;
    }

    // USUARIO NORMAL oculta lo exclusivo del admin
    if (!isAdmin && user) {
      if (item.role === "admin") return false;
    }

    // INVITADO: ocultar rutas privadas
    if (!user && !isAdmin && item.auth === "private") return false;

    // Ocultar login/register si hay auth
    if (item.auth === "hiddenWhenAuth" && (user || isAdmin)) return false;

    return true;
  });

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

            {filteredNav.map((item: NavItem) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg hover:text-red-500 transition"
              >
                {item.text}
              </Link>
            ))}

          </div>
        </div>
      )}
    </>
  );
}
