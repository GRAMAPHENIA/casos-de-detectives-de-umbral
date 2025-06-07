'use client';

import { Tooltip } from "@nextui-org/tooltip";

import { MapPin } from 'lucide-react';
import { useState } from "react";
import dynamic from "next/dynamic";
import { Case } from "@/types/case";

// Importación dinámica para el modal
const DynamicMapModal = dynamic(
  () => import("@/components/map/MapModal"),
  { ssr: false }
);

// Datos de ejemplo - en una aplicación real, estos vendrían de una API
export const mockCases: Case[] = [
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
  }
];

const MapButton = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const handleCaseAccept = (caseId: string) => {
    console.log(`Caso ${caseId} aceptado`);
    // Aquí iría la lógica para aceptar el caso
    setIsMapOpen(false);
  };

  return (
    <>
      <Tooltip
        content="Mapa de Casos"
        placement="bottom"
        className="bg-zinc-900 px-4 rounded-lg text-zinc-400"
      >
        <button 
          onClick={() => setIsMapOpen(true)}
          className="p-1 hover:bg-zinc-800 rounded-md transition-colors"
          aria-label="Ver mapa de casos"
        >
          <MapPin
            className="w-6 h-6"
          />
        </button>
      </Tooltip>

      <DynamicMapModal 
        isOpen={isMapOpen} 
        onClose={() => setIsMapOpen(false)}
        cases={mockCases}
        onCaseAccept={handleCaseAccept}
      />
    </>
  );
};

export default MapButton;
