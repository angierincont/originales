"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const ir = (ruta: string) => {
    router.push(`/sensaciones/${ruta}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 bg-black text-white">
      <h1 className="text-4xl font-bold">Museo de Sensaciones</h1>

      <p className="opacity-80">Elige una sensación para explorarla:</p>

      <div className="flex gap-6">
        <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700"
          onClick={() => ir("calma")}
        >
          Calma
        </button>

        <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700"
          onClick={() => ir("curiosidad")}
        >
          Curiosidad
        </button>

        <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700"
          onClick={() => ir("tension")}
        >
          Tensión
        </button>
      </div>
    </main>
  );
}
