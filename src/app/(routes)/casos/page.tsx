"use client";

import Menu from "@/components/header/menu/menu";
import Footer from "@/components/footer/footer";
import { casos } from "@/data/casos";
import { CasoResumen } from "@/components/casos/caso-resumen";

export default function CasosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-950/30 to-zinc-900/10">
      <header>
        <Menu />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-blue-400 mb-10 tracking-tight">
          Casos
        </h1>

        <div className="w-full max-w-4xl space-y-6">
          {casos.map((caso) => (
            <CasoResumen key={caso.id} caso={caso} />
          ))}
        </div>
      </main>

      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
}
