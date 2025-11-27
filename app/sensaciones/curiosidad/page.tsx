"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Curiosidad() {
  const [hovering, setHovering] = useState(false);
  const router = useRouter();

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center text-white transition-all duration-700 
      ${hovering ? "bg-purple-900" : "bg-purple-700"}
    `}>
      <h1 className="text-3xl font-semibold">Sensación: Curiosidad</h1>

      <p className="mt-4 opacity-80">Pasa el cursor por el área secreta.</p>

      <div
        className="mt-10 w-64 h-40 bg-black/40 rounded-xl"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      />

      {hovering && (
        <p className="mt-6">Has despertado la curiosidad oculta.</p>
      )}

      <button className="mt-10 px-5 py-2 bg-gray-800 rounded-lg" onClick={() => router.push("/")}>
        Volver
      </button>
    </main>
  );
}
