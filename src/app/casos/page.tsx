'use client';

import Menu from '@/components/header/menu/menu';
import Footer from '@/components/footer/footer';
import { casos } from '@/data/casos';
import { CasoCard } from '@/components/casos/caso-card';

export default function CasosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900/20 to-zinc-900/20">
      <header className="">
        <Menu />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold text-blue-500 mb-8">Casos</h1>
        
        <div className="space-y-4">
          {casos.map((caso) => (
            <CasoCard key={caso.id} caso={caso} />
          ))}
        </div>
      </main>
      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
}
