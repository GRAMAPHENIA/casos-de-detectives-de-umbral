"use client";

import * as React from 'react';
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Tooltip } from "@nextui-org/tooltip";
import { Case, MapPinProps } from "@/types/case";
import { useState, useMemo } from "react";

// Componente simplificado para los pines
const MapPin = ({ caseData, onAccept }: MapPinProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getPinStyle = () => {
    switch(caseData.difficulty) {
      case 'easy': return 'bg-teal-500';
      case 'medium': return 'bg-amber-500';
      case 'hard': return 'bg-rose-500';
      default: return 'bg-sky-500';
    }
  };

  return (
    <div 
      className="absolute cursor-pointer group"
      style={{
        left: `${caseData.location.x}%`,
        top: `${caseData.location.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onAccept(caseData.id)}
    >
      <div className="relative">
        <div className={`w-3 h-3 rounded-full ${getPinStyle()} shadow-md`}></div>
        {isHovered && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2 bg-zinc-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            {caseData.title}
          </div>
        )}
      </div>
    </div>
  );
};

const MapModal = React.memo(({ isOpen, onClose, cases, onCaseAccept }: {
  isOpen: boolean;
  onClose: () => void;
  cases: Case[];
  onCaseAccept: (caseId: string) => void;
}) => {
  // Prevenir renderizados innecesarios
  const memoizedCases = React.useMemo(() => cases, [cases]);
  
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Fondo oscuro con blur */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Contenedor del modal */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-900 rounded-xl shadow-2xl overflow-hidden flex flex-col z-10 transform transition-all duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Encabezado */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <div>
            <h2 className="text-xl font-bold text-white">Mapa de Casos</h2>
            <p className="text-sm text-zinc-400">Selecciona un caso para comenzar</p>
          </div>
          
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Cerrar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        {/* Contenido principal */}
        <div className="flex-1 overflow-auto p-4">
          {/* Área del mapa simplificada */}
          <div className="relative w-full h-[50vh] bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center">
            {/* <p className="text-9xl text-zinc-600">?</p> */}
            
            {/* Pines de ubicación de los casos */}
            {memoizedCases.map((caseItem) => (
              <MapPin 
                key={caseItem.id} 
                caseData={caseItem} 
                onAccept={onCaseAccept} 
              />
            ))}
          </div>
          
          {/* Lista de casos */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3 text-white">Casos Disponibles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {memoizedCases.map((caseItem) => (
                <div 
                  key={caseItem.id}
                  className="bg-zinc-800 p-3 rounded-lg hover:bg-zinc-700 transition-colors cursor-pointer border border-zinc-700/50"
                  onClick={() => onCaseAccept(caseItem.id)}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-white">{caseItem.title}</h4>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      caseItem.difficulty === 'easy' ? 'bg-teal-500/20 text-teal-400' :
                      caseItem.difficulty === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                      'bg-rose-500/20 text-rose-400'
                    }`}>
                      {caseItem.difficulty === 'easy' ? 'Fácil' : caseItem.difficulty === 'medium' ? 'Medio' : 'Difícil'}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{caseItem.description}</p>
                  <p className="text-sm text-sky-400 mt-2 font-medium">Recompensa: ${caseItem.reward}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pie de página */}
        <div className="p-4 border-t border-zinc-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
});

export default MapModal;
