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
    <div
      className={`flex flex-col justify-center items-center h-screen bg-black text-white transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* --- LOGO ANIMADO --- */}
      <h1 className="loadingZ mb-8">Z</h1>

    </div>
  );
}
