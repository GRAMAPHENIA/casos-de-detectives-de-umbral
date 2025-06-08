import Menu from '@/components/header/menu/menu';
import Footer from '@/components/footer/footer';
import { notFound } from "next/navigation";
import { casos } from "@/data/casos";

export async function generateStaticParams() {
  return casos.map((caso) => ({ slug: caso.slug }));
}

type PageProps = {
  params: { slug: string }
};

export default function CasoPage({ params }: PageProps) {
  const caso = casos.find((c) => c.slug === params.slug);
  if (!caso) return notFound();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900/20 to-zinc-900/20">
      <header>
        <Menu />
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-xl bg-zinc-900/80 rounded-xl shadow-lg p-8 border border-blue-500/20">
          <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">{caso.titulo}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <p><span className="font-semibold text-blue-400">Investigador:</span> <span className="text-zinc-200">{caso.investigador}</span></p>
            <p><span className="font-semibold text-blue-400">Ubicación:</span> <span className="text-zinc-200">{caso.ubicacion}</span></p>
            <p><span className="font-semibold text-blue-400">Fecha:</span> <span className="text-zinc-200">{caso.fecha}</span></p>
            <p><span className="font-semibold text-blue-400">Estado:</span> <span className="text-zinc-200">{caso.estado}</span></p>
            <p><span className="font-semibold text-blue-400">Prioridad:</span> <span className="text-zinc-200">{caso.prioridad}</span></p>
            <p><span className="font-semibold text-blue-400">Involucrados:</span> <span className="text-zinc-200">{caso.involucrados}</span></p>
          </div>
          <section className="mt-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Descripción</h2>
            <p className="text-zinc-300 leading-relaxed">{caso.descripcion}</p>
          </section>
        </div>
      </main>
      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
}
