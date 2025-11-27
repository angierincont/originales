"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Tension() {
  const [text, setText] = useState("");
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-red-700 text-white">
      <h1 className="text-3xl font-semibold">Sensación: Tensión</h1>

      <p className="mt-4 opacity-80">Escribe una palabra que te genere tensión.</p>

      <input
        className="mt-6 p-3 bg-black/30 rounded-xl outline-none"
        onChange={(e) => setText(e.target.value)}
      />

      {text.length > 3 && (
        <p className="mt-6">Has liberado esa tensión: <b>{text}</b></p>
      )}

      <button className="mt-10 px-5 py-2 bg-gray-900 rounded-lg" onClick={() => router.push("/")}>
        Volver
      </button>
    </main>
  );
}
