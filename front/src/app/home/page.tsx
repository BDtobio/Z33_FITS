"use client";
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { FaTshirt, FaHatCowboy, FaShoppingBag, FaBaseballBall } from "react-icons/fa"; 
const categoryIcons = [
  { id: 1, name: "Remeras", icon: <FaTshirt size={40} /> },
  { id: 2, name: "Chombas", icon: <FaHatCowboy size={40} /> },
  { id: 3, name: "Pantalones", icon: <FaShoppingBag size={40} /> },  
  { id: 4, name: "Accesorios", icon: <FaShoppingBag size={40} /> },
  { id: 5, name: "Gorras", icon: <FaBaseballBall size={40} /> },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slide = (direction: number) => {
    setCurrentIndex((prevIndex) => (prevIndex + direction + categoryIcons.length) % categoryIcons.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Z33 Fits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Sección de imagen principal */}
      <main className="relative w-full h-[70vh] flex items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/videos/video1.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">Z33</h1>
        </div>
      </main>

      <div className="bg-black text-white text-3xl font-semibold text-center py-6 px-4">
        Más que una tienda, somos tu gang
      </div>

      {/* Carrusel de categorías */}
      <div className="w-full max-w-5xl mx-auto py-10 px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Categorías</h2>
        </div>

        <div className="relative flex items-center">
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 z-10 p-2 text-2xl text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-200"
          >
            &#10094;
          </button>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {categoryIcons.map((category) => (
                <div key={category.id} className="min-w-full flex flex-col items-center">
                  <div className="mb-4">{category.icon}</div>
                  <h3 className="text-xl text-gray-800">{category.name}</h3>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => slide(1)}
            className="absolute right-0 z-10 p-2 text-2xl text-gray-700 bg-white rounded-full shadow-md hover:bg-gray-200"
          >
            &#10095;
          </button>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {categoryIcons.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Sección de fotos */}
      <div className="mt-0 px-0 w-screen min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-px">
  {[
    { href: "/categoria/remeras", src: "/images/modelos/modelos2.png", alt: "Remeras" },
    { href: "/categoria/pantalones", src: "/images/modelos/modelos1.png", alt: "Pantalones" },
    { href: "/categoria/accesorios", src: "/images/modelos/modelos4.png", alt: "Accesorios" },
    { href: "/categoria/gorras", src: "/images/modelos/modelos6.png", alt: "Gorras" }
  ].map(({ href, src, alt }) => (
    <Link key={href} href={href} className="relative flex">
      <img src={src} alt={alt} className="w-full h-[60vh] md:h-[60vh] lg:h-[90] object-cover transition-all duration-300" />
      <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-white text-red-600 font-bold py-2 px-4 rounded transition-all duration-300 
        hover:bg-red-600 hover:text-white hover:scale-110">
        Ver
      </button>
    </Link>
  ))}
</div>

      {/* Sección de "Latest Drops" */}
      <div className="bg-black text-center h-[200px] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white">LASTEST DROPS</h2>
        <Link href="/drops">
          <button className="mt-4 px-6 py-3 bg-red-700 text-white text-lg font-semibold rounded-md hover:bg-gray-900">
            DROPS
          </button>
        </Link>
      </div>

      <section className="video-section py-0 bg-black w-full">
        <div className="w-full px-0 text-center bg-black md:mb-10">
          <div className="video-container relative w-full h-[45vh]">
            <video
              className="w-full h-full object-cover shadow-lg md:max-w-screen-md md:mx-auto"
              autoPlay
              muted
              loop
            >
              <source src="videos/video2.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}
