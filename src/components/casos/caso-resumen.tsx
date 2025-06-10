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
    <div className="flex gap-4 border border-blue-500/10 hover:border-blue-500/20 transition-colors rounded-lg p-6 shadow-sm">
      <div className="">
        <Image
          src={caso.imagen}
          alt={caso.titulo}
          width={180}
          height={180}
          className="rounded-md"
          
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-blue-400 font-semibold mb-2">{caso.titulo}</h3>
      <p className="text-amber-100 line-clamp-3 mb-4">{caso.sinopsis}</p>
      <Link 
        href={`/casos/${caso.slug}`}
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500/10 hover:bg-blue-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Leer caso completo
      </Link>
      </div>
    </div>
  );
}
