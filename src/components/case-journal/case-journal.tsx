'use client';

import { useState, useEffect } from 'react';
import { Case } from '@/types/case';

// Datos de ejemplo para los casos
const mockCases: Case[] = [
  {
    id: '1',
    title: 'El Misterio del Reloj Parado',
    description: 'Un reloj antiguo se detuvo misteriosamente en la Torre del Reloj.',
    location: {
      x: 50,
      y: 50
    },
    locationText: 'Torre del Reloj',
    difficulty: 'medium',
    reward: 100,
    status: 'available',
    date: '2025-06-07',
    type: 'otro',
    content: ['El reloj se detuvo a las 3:00 am.', 'Última vez visto funcionando a las 10:00 pm.'],
  },
  {
    id: '2',
    title: 'El Tesoro Perdido',
    description: 'Se ha perdido un tesoro legendario en las calles de Umbral.',
    location: {
      x: 70,
      y: 30
    },
    locationText: 'Calle Principal',
    difficulty: 'hard',
    reward: 500,
    status: 'available',
    date: '2025-06-07',
    type: 'otro',
    content: ['Última vez visto en la Calle Principal.', 'Testigos reportan luces extrañas.'],
  },
  {
    id: '3',
    title: 'El Mensaje en la Botella',
    description: 'Una botella con un mensaje misterioso apareció en el río.',
    location: {
      x: 30,
      y: 70
    },
    locationText: 'Río Umbral',
    difficulty: 'easy',
    reward: 50,
    status: 'available',
    date: '2025-06-07',
    type: 'otro',
    content: ['Mensaje en latín.', 'Botella encontrada en la orilla del río.'],
  },
  {
    id: '4',
    title: 'El Mapa del Tesoro Falsificado',
    description: 'Un coleccionista ha sido estafado con un mapa del tesoro falso. Necesitamos encontrar al estafador antes de que desaparezca con el botín.',
    location: { x: 0, y: 0 },
    locationText: 'Calle del Mercado',
    difficulty: 'easy',
    reward: 800,
    status: 'available',
    date: '2025-06-07',
    type: 'estafa',
    content: ['Mapa encontrado en la librería antigua.', 'Última vez visto el coleccionista en el café de la esquina.'],
  },
];

export default function CaseJournal() {
  const [cases, setCases] = useState<Case[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // En una aplicación real, aquí harías una llamada a la API
    const timer = setTimeout(() => {
      setCases(mockCases);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCaseSelect = (caseId: string) => {
    // Aquí manejaremos la selección de un caso
    console.log('Caso seleccionado:', caseId);
    // Navegar a la página del caso o abrir un modal con más detalles
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
      </div>
    );
  }

  if (cases.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-stone-400 mb-4">No hay casos disponibles en este momento.</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition-colors"
        >
          Recargar
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="bg-blue-500/5 p-6 rounded-lg border-l-4 border-blue-500/50">
        <p className="text-blue-100/80 italic">
          &quot;Estimado detective, a continuación encontrará los casos que requieren su atención inmediata. 
          Cada uno presenta sus propios desafíos y misterios por resolver.&quot;
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {cases.map((caseItem) => (
          <div 
            key={caseItem.id} 
            className="bg-blue-500/5 rounded-lg overflow-hidden border border-blue-500/10 hover:border-blue-500/30 transition-colors cursor-pointer"
            onClick={() => handleCaseSelect(caseItem.id)}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-lg font-medium text-blue-100">{caseItem.title}</h2>
                <span className={`px-3 py-1 text-xs rounded-tl-xl rounded-br-xl ${
                  caseItem.difficulty === 'easy' ? 'bg-green-500/10 text-green-400' :
                  caseItem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-400' :
                  'bg-red-500/10 text-red-400'
                }`}>
                  {caseItem.difficulty === 'easy' ? 'Fácil' : caseItem.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                </span>
              </div>
              
              <p className="text-blue-100/70 text-sm mb-4 line-clamp-3">{caseItem.description}</p>
              
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-blue-500/10">
                <span className="text-sm text-blue-300/80">Recompensa: <span className="font-medium">${caseItem.reward.toLocaleString()}</span></span>
                <button 
                  className="px-4 py-2 bg-blue-500/10 text-blue-400 hover:text-blue-300 text-sm rounded-tl-xl rounded-br-xl hover:bg-blue-500/20 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCaseSelect(caseItem.id);
                  }}
                >
                  Investigar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
