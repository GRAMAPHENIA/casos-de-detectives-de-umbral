'use client';

import Link from 'next/link';
import Image from 'next/image';

interface CasoResumenProps {
  caso: {
    id: number;
    slug: string;
    titulo: string;
    sinopsis: string;
    imagen: string;
    historia: {
      introduccion: string;
      escenario: string;
      capitulos: {
        titulo: string;
        contenido: string;
      }[];
      temas: string[];
    };
  };
}

export function CasoResumen({ caso }: CasoResumenProps) {
  return (
    <div className="bg-white/5 rounded-lg p-6 shadow-sm hover:bg-white/10 transition-colors">
      <div className="aspect-w-16 aspect-h-9 mb-4 relative">
        <Image
          src={caso.imagen}
          alt={caso.titulo}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-blue-500 font-semibold mb-2">{caso.titulo}</h3>
      <p className="text-blue-500/80 line-clamp-3 mb-4">{caso.sinopsis}</p>
      <Link 
        href={`/casos/${caso.slug}`}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Leer caso completo
      </Link>
    </div>
  );
}
