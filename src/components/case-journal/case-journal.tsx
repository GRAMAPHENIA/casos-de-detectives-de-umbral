'use client';

import { useState, useEffect } from 'react';
import { Case } from '@/types/case';
import Image from 'next/image';
import Link from 'next/link';

// Datos de ejemplo para los casos
const mockCases: Case[] = [
  {
    id: '1',
    title: 'El Misterio del Reloj de Arena',
    description: 'Un valioso reloj de arena ha desaparecido de la mansión Blackwood. El último avistamiento fue anoche en la biblioteca. Se sospecha de la servidumbre.',
    location: { x: 0, y: 0 },
    difficulty: 'medium',
    reward: 1500,
    status: 'available',
  },
  {
    id: '2',
    title: 'La Desaparición de la Sra. Whitmore',
    description: 'La Sra. Whitmore, una respetada dama de la alta sociedad, ha desaparecido sin dejar rastro. Su sombrero y su bolso fueron encontrados en el parque central.',
    location: { x: 0, y: 0 },
    difficulty: 'hard',
    reward: 2500,
    status: 'available',
  },
  {
    id: '3',
    title: 'El Mapa del Tesoro Falsificado',
    description: 'Un coleccionista ha sido estafado con un mapa del tesoro falso. Necesitamos encontrar al estafador antes de que desaparezca con el botín.',
    location: { x: 0, y: 0 },
    difficulty: 'easy',
    reward: 800,
    status: 'available',
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
          "Estimado detective, a continuación encontrará los casos que requieren su atención inmediata. 
          Cada uno presenta sus propios desafíos y misterios por resolver."
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
