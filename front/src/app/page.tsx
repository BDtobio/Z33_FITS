"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";



export default function Landing() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className={`flex flex-col justify-center items-center h-screen bg-black text-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>     
      <h1 className="font-Hamston text-[7rem] leading-none mb-8">
        Z33FITS
      </h1>
     

      <p className="font-nickson text-3xl">
        TU TIENDA
      </p>
    </div>
  );
}
