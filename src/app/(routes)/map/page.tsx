'use client';

import { Case } from '@/types/case';
import { generateSlug } from '@/lib/cases';
import Image from 'next/image';
import Link from 'next/link';

// Datos de ejemplo para los casos
const mockCases: Case[] = [
  {
    id: '1',
    title: 'El Reloj Perdido',
    description: 'Un valioso reloj antiguo ha desaparecido de la mansión Blackwood. El dueño sospecha de un robo interno.',
    location: { x: 40.4168, y: -3.7038 },
    difficulty: 'medium',
    reward: 2500,
    status: 'available',
    date: '5 de Junio, 1899',
    type: 'desaparicion',
    locationText: 'Mansión Blackwood, Callejón del Tiempo 42',
    content: [
      'El reloj es una pieza única del siglo XVIII, valorada en más de 50,000 coronas.',
      'El mayordomo reportó haber visto a un hombre sospechoso merodeando la mansión el día del robo.',
      'La vitrina donde se guardaba el reloj no mostraba señales de forzamiento.',
      'Uno de los empleados de la cocina mencionó haber escuchado una discusión en el estudio antes del robo.'
    ]
  },
  {
    id: '2',
    title: 'La Desaparición de la Señorita Grey',
    description: 'La joven heredera no ha sido vista desde hace tres días. Su familia está desesperada y ofrece una generosa recompensa.',
    location: { x: 40.4181, y: -3.7066 },
    difficulty: 'hard',
    reward: 5000,
    status: 'available',
    date: '3 de Junio, 1899',
    type: 'persona_desaparecida',
    locationText: 'Residencia Grey, Avenida de los Suspiros 15',
    content: [
      'La señorita Grey fue vista por última vez saliendo de la ópera con un caballero no identificado.',
      'Su diario personal desapareció el mismo día de su desaparición.',
      'La familia recibió una nota de rescate pidiendo 10,000 coronas.',
      'Su doncella mencionó que últimamente recibía cartas de un admirador secreto.'
    ]
  },
  {
    id: '3',
    title: 'El Estafador de la Alta Sociedad',
    description: 'Un estafador está engañando a las familias adineradas de la ciudad con falsas inversiones. Ya ha conseguido más de 10,000 coronas.',
    location: { x: 40.4152, y: -3.7012 },
    difficulty: 'easy',
    reward: 1500,
    status: 'available',
    date: '3 de Junio, 1899',
    type: 'estafa',
    locationText: 'Distrito Financiero, Plaza del Comercio 7',
    content: [
      'El estafador se hace pasar por un exitoso empresario llamado Reginald Von Kleist.',
      'Utiliza documentos falsificados de una compañía minera en Sudáfrica.',
      'Suele frecuentar los clubes exclusivos del centro de la ciudad.',
      'Una de las víctimas logró tomar una fotografía borrosa del sospechoso.'
    ]
  },
];

const NewspaperClipping = ({ caseItem }: { caseItem: Case }) => {
  const getTypeLabel = () => {
    switch(caseItem.type) {
      case 'desaparicion':
        return 'OBJETO PERDIDO';
      case 'persona_desaparecida':
        return 'PERSONA DESAPARECIDA';
      case 'estafa':
        return 'ESQUEMA FRAUDULENTO';
      default:
        return 'CASO ABIERTO';
    }
  };

  const getTypeColor = () => {
    switch(caseItem.type) {
      case 'desaparicion':
        return 'border-amber-700';
      case 'persona_desaparecida':
        return 'border-red-800';
      case 'estafa':
        return 'border-blue-800';
      default:
        return 'border-gray-800';
    }
  };

  return (
    <div className="p-6 my-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">{getTypeLabel()}</span>
        <span className="text-xs text-zinc-400">{caseItem.date}</span>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-3">{caseItem.title}</h2>
      
      <div className="flex items-center text-sm text-blue-500 mb-4">
        <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {caseItem.locationText}
      </div>
      
      <p className="text-zinc-200 mb-6 leading-relaxed">
        {caseItem.description}
      </p>
      
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center">
          <span className="text-sm font-medium text-zinc-300">Recompensa:</span>
          <span className="ml-2 px-3 py-1 bg-blue-500/20 text-white font-medium rounded-sm">
            ${caseItem.reward.toLocaleString()}
          </span>
        </div>
        
        <Link 
          href={`/caso/${generateSlug(caseItem.title)}`}
          className="px-4 py-2 bg-blue-500/10 text-blue-400 hover:text-blue-300 hover:bg-blue-500/20 text-sm font-medium rounded-tl-xl rounded-br-xl transition-colors"
        >
          Tomar caso
        </Link>
      </div>
    </div>
  );
};

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900/10 to-blue-950/50">
      <div className="max-w-4xl mx-auto p-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">El Periódico de Umbral</h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-zinc-300 italic">"La verdad, aunque esté en la sombra, siempre sale a la luz"</p>
          <div className="mt-2 text-sm text-zinc-400">Edición del 6 de Junio de 1899</div>
        </header>
        
        <div className="p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Anuncios y Recompensas</h2>
            <p className="text-zinc-200">
              La siguiente es una selección de casos que requieren la atención de nuestros más hábiles investigadores.
              Si posee información sobre alguno de estos incidentes, por favor contáctenos.
            </p>
          </div>
          
          <div className="space-y-8">
            {mockCases.map((caseItem) => (
              <NewspaperClipping key={caseItem.id} caseItem={caseItem} />
            ))}
          </div>
          
          <div className="mt-10 pt-6 text-center text-sm text-zinc-400">
            <p>El Periódico de Umbral no se hace responsable por la veracidad de los anuncios publicados.</p>
            <p className="mt-1">© 1899 - Todos los derechos reservados</p>
          </div>
        </div>
      </div>
    </div>
  );
}
