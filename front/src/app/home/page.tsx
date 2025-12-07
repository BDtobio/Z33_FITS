"use client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  


  

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Z33 Fits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Imagen principal */}
      <main className="relative w-full h-[70vh] flex items-center justify-center">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop>
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


{/* Sección de imágenes grandes de la galeria no de base de datos ojo con esto*/} <div className="mt-0 px-0 w-screen min-h-[100vh] grid grid-cols-1 md:grid-cols-2 gap-px"> {[ { href: "/categories/2", src: "/images/modelos/modelos2.png", alt: "Remeras" }, { href: "/categories/4", src: "/images/modelos/modelos1.png", alt: "Pantalones largos" }, { href: "/categories/6", src: "/images/modelos/modelos4.png", alt: "Accesorios" }, { href: "/categories/3", src: "/images/modelos/modelos6.png", alt: "Gorras" } ].map(({ href, src, alt }) => ( <Link key={href} href={href} className="relative flex"> <Image src={src} alt={alt} width={1920} height={1080} className="w-full h-[60vh] md:h-[60vh] lg:h-[90] object-cover transition-all duration-300" /> <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-red-600 font-bold py-2 px-4 rounded transition-all duration-300 hover:bg-red-600 hover:text-white hover:scale-110"> Ver </button> </Link> ))} </div>

      {/* Últimos Drops */}
      <div className="bg-black text-center h-[200px] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-white">LASTEST DROPS</h2>
        <Link href="/drops">
          <button className="mt-4 px-6 py-3 bg-red-700 text-white text-lg font-semibold rounded-md hover:bg-gray-900">
            DROPS
          </button>
        </Link>
      </div>

      {/* Video final */}
      <section className="video-section py-0 bg-black w-full">
        <div className="w-full px-0 text-center bg-black md:mb-10">
          <div className="video-container relative w-full h-[45vh]">
            <video
              className="w-full h-full object-cover shadow-lg md:max-w-screen-md md:mx-auto"
              autoPlay muted loop
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
