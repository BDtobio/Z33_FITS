"use client";

import Image from "next/image";
import Link from "next/link";
import { navConfig, NavItem } from "@/config/NavConfig";
import NavbarClient from "../DropDownNav/DropDownNav";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, isAdmin, logout } = useAuth();

  return (
    <nav className="bg-black/90 backdrop-blur-md shadow-md fixed top-0 w-full z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/part11.png"
            alt="Logo Z33"
            width={55}
            height={55}
            priority
            className="hover:scale-110 transition duration-300"
          />
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex flex-1 justify-center space-x-10">
          {navConfig.map((item: NavItem) => {

            // 🔥 ADMIN: solo ver items role:"admin" o role:"all"
            if (isAdmin) {
              if (item.role !== "admin" && item.role !== "all") return null;
            }

            // 🔥 USUARIO NORMAL: ocultar items solo admin
            if (!isAdmin && user) {
              if (item.role === "admin") return null;
            }

            // 🔥 INVITADO: no mostrar items privados
            if (!user && !isAdmin && item.auth === "private") return null;

            // 🔥 Ocultar login/register si hay auth (user o admin)
            if (item.auth === "hiddenWhenAuth" && (user || isAdmin)) return null;

            return (
              <Link key={item.path} href={item.path}>
                <span className="relative text-white text-lg group hover:text-red-500 transition">
                  {item.text}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </span>
              </Link>
            );
          })}
        </div>

        {/* USER AREA (DESKTOP) */}
        <div className="hidden md:flex items-center space-x-4 text-white">
          {!user && !isAdmin ? (
            null
          ) : (
            <>
              <span className="text-gray-300 text-lg">
                Hola,{" "}
                <span className="text-red-500 font-semibold">
                  {isAdmin ? "Admin" : user?.email.split("@")[0]}
                </span>
              </span>

              <button
                onClick={logout}
                className="px-4 py-1 bg-red-700 hover:bg-red-800 rounded-md text-lg transition"
              >
                Salir
              </button>
            </>
          )}
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <NavbarClient />
        </div>
      </div>
    </nav>
  );
}
