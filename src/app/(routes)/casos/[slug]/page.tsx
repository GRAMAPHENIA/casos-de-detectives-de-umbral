'use client';

import { useParams } from 'next/navigation';
import { casos } from '@/data/casos';
import Image from 'next/image';
import Menu from '@/components/header/menu/menu';
import Footer from '@/components/footer/footer';

export default function CasoPage() {
  const params = useParams();
  const caso = casos.find(c => c.slug === params.slug);

  if (!caso) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900/20 to-zinc-900/20">
        <main className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-bold text-blue-500 mb-4">Caso no encontrado</h1>
          <p className="text-blue-500/80">El caso que estás buscando no existe.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900/20 to-zinc-900/20">
      <header>
        <Menu />
      </header>

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="mb-8 relative rounded-lg overflow-hidden">
            <Image
              src={caso.imagen}
              alt={caso.titulo}
              width={100}
              height={100}
            />
          </div>

          <h1 className="text-5xl font-bold text-blue-500 mb-8">
            {caso.titulo}
          </h1>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Sinopsis</h2>
              <p className="text-lg text-blue-500/80">{caso.sinopsis}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Historia Completa</h2>
              <div className="prose prose-blue max-w-none">
                <div className="space-y-6">
                  <p>{caso.historia.introduccion}</p>
                  <p>
                    <strong>Escenario:</strong> {caso.historia.escenario}
                  </p>

                  <div className="space-y-4">
                    {caso.historia.capitulos.map((capitulo, index) => (
                      <div key={index} className="pl-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {capitulo.titulo}
                        </h3>
                        <p>{capitulo.contenido}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">
                      Temas principales
                    </h3>
                    <ul className="list-disc list-inside text-blue-500/80">
                      {caso.historia.temas.map((tema, index) => (
                        <li key={index}>{tema}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Personas involucradas
              </h2>
              <p className="text-lg text-blue-500/80">
                {caso.involucrados} personas
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Estado</h2>
              <p className="text-lg text-blue-500/80">{caso.estado}</p>
            </section>
          </div>
        </div>
      </main>
      <footer className="mt-auto py-4">
        <Footer />
      </footer>
    </div>
  );
}
