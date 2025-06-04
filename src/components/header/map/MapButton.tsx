'use client';

import { Tooltip } from "@nextui-org/tooltip";
import Image from "next/image";
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
    title: 'El Misterio del Reloj Perdido',
    description: 'Un valioso reloj antiguo ha desaparecido del museo local. Se necesita ayuda para recuperarlo.',
    location: { x: 30, y: 45 },
    difficulty: 'medium',
    reward: 1500,
    status: 'available'
  },
  {
    id: '2',
    title: 'El Secreto de la Mansión Blackwood',
    description: 'Extraños sucesos están ocurriendo en la antigua mansión. ¿Podrás descubrir la verdad?',
    location: { x: 70, y: 25 },
    difficulty: 'hard',
    reward: 3000,
    status: 'available'
  },
  {
    id: '3',
    title: 'El Misterio del Gato Desaparecido',
    description: 'El gato del alcalde ha desaparecido. Pistas sugieren que podría estar en el parque.',
    location: { x: 50, y: 75 },
    difficulty: 'easy',
    reward: 800,
    status: 'available'
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
          <Image
            src="/icons/map.svg"
            alt="Mapa de Casos"
            width={24}
            height={24}
            className="invert-25 hover:invert-[1] transition-all"
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
