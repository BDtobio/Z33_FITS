import Image from "next/image";
import { navConfig, NavItem } from "@/config/NavConfig";
import Link from "next/link";
import NavbarClient from "../DropDownNav/DropDownNav";

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between lg:justify-start">
        <div className="flex items-center text-white text-3xl lg:text-4xl font-semibold">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/part11.png"
              alt="Apple Logo"
              width={60}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Enlaces visibles solo en pantallas grandes */}
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          {navConfig.map((el: NavItem) => (
            <div key={`/${el.path}`}>
              <Link href={el.path}>
                <span className="relative text-white text-xl group hover:text-red-500">
                  {el.text}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-red-500 transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Menú hamburguesa en pantallas pequeñas */}
        <div className="md:hidden">
          <NavbarClient />
        </div>
      </div>
    </nav>
  );
}
