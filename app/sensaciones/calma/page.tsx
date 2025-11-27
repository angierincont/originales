"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Calma() {
  const [pressing, setPressing] = useState(false);
  const router = useRouter();

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center text-white transition-all duration-700 
      ${pressing ? "bg-green-900" : "bg-green-700"}
    `}>
      <h1 className="text-3xl font-semibold">Sensación: Calma</h1>

      <p className="mt-4 opacity-80">Mantén presionado el botón 3 segundos.</p>

      <button
        className="mt-8 px-8 py-3 bg-black/40 rounded-xl"
        onMouseDown={() => setPressing(true)}
        onMouseUp={() => setPressing(false)}
        onMouseLeave={() => setPressing(false)}
      >
        Mantener presionado
      </button>

      {pressing && (
        <p className="mt-6">La calma responde a tu permanencia...</p>
      )}

      <button className="mt-10 px-5 py-2 bg-gray-800 rounded-lg" onClick={() => router.push("/")}>
        Volver
      </button>
    </main>
  );
}
