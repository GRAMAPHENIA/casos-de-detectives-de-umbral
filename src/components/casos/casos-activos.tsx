    'use client';

import Link from 'next/link';
import { casos } from '@/data/casos';

export function CasosActivos() {
  const casosActivos = casos.filter(caso => caso.estado === 'Activo' || caso.estado === 'En progreso');

  return (
    <div className="space-y-4">
      {casosActivos.map((caso) => (
        <Link
          key={caso.id}
          href={`/caso/${caso.slug}`}
          className="p-4 hover:bg-blue-500/10 transition-colors rounded-lg"
        >
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-sm font-medium text-blue-500">{caso.titulo}</h3>
              <p className="text-xs text-blue-500/80">{caso.ubicacion}</p>
            </div>
            <span className={`px-2 py-1 text-xs rounded-full ${
              caso.prioridad === 'Alta' ? 'bg-red-500/10 text-red-500' : 
              caso.prioridad === 'Media' ? 'bg-yellow-500/10 text-yellow-500' : 
              'bg-green-500/10 text-green-500'
            }`}>
              {caso.prioridad}
            </span>
          </div>
          <p className="text-sm text-blue-500/80">Fecha: {caso.fecha}</p>
          <span className={`px-2 py-1 text-xs rounded-full mt-2 ${
            caso.estado === 'Activo' ? 'bg-blue-500/10 text-blue-500' : 
            caso.estado === 'En progreso' ? 'bg-yellow-500/10 text-yellow-500' : 
            'bg-gray-500/10 text-gray-500'
          }`}>
            {caso.estado}
          </span>
        </Link>
      ))}
    </div>
  );
}
