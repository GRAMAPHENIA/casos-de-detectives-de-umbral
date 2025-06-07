import { Case, CaseType } from "@/types/case";

// Datos de ejemplo de casos
const mockCases: Case[] = [
  {
    id: '1',
    title: 'El Misterio del Reloj de Arena',
    description: 'Un valioso reloj de arena ha desaparecido de la mansión del acaudalado Lord Blackwood. El objeto, de incalculable valor histórico, era la pieza central de su colección privada. Las pistas son escasas y el tiempo corre en tu contra para resolver este enigma antes de que el rastro se enfríe.',
    location: { x: 40.4168, y: -3.7038 },
    locationText: 'Mansión Blackwood, Callejón del Tiempo 42',
    difficulty: 'medium',
    reward: 2500,
    status: 'available',
    date: '5 de Junio, 1899',
    type: 'estafa',
    content: [
      'El reloj de arena, de origen egipcio, fue adquirido por Lord Blackwood en una subasta en El Cairo el mes pasado.',
      'El mayordomo reportó haber escuchado ruidos en la biblioteca la noche del robo, pero no vio a nadie sospechoso.',
      'Una de las criadas mencionó haber visto a un hombre con un abrigo largo saliendo apresuradamente por la puerta trasera.',
      'El reloj era conocido por tener una inscripción en jeroglíficos que solo unos pocos expertos podrían traducir.'
    ]
  },
  // Agrega más casos según sea necesario
];

// Función para generar un slug a partir de un texto
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina acentos
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

// Función para obtener un caso por su slug (título convertido a URL)
export async function getCaseBySlug(slug: string): Promise<Case | undefined> {
  // Simulamos una operación asíncrona
  return new Promise((resolve) => {
    const foundCase = mockCases.find(caseItem => 
      generateSlug(caseItem.title) === slug
    );
    resolve(foundCase);
  });
}

// Función para obtener todos los casos
export function getAllCases(): Case[] {
  return mockCases;
}

// Función para generar rutas estáticas
export function getAllCaseSlugs() {
  return mockCases.map(caseItem => ({
    slug: generateSlug(caseItem.title)
  }));
}
