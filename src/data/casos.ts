export interface Caso {
  id: number;
  titulo: string;
  investigador: string;
  ubicacion: string;
  fecha: string;
  estado: string;
  prioridad: string;
  descripcion: string;
  slug: string;
  involucrados: number;
}

export const casos: Caso[] = [
  {
    id: 1,
    titulo: 'El silencio del culpable',
    investigador: 'Detective García',
    ubicacion: 'Calle 45 # 12-34',
    fecha: '07/06/2025',
    estado: 'Activo',
    prioridad: 'Alta',
    descripcion: 'Investigación de un crimen donde las confesiones son más sospechosas que el silencio.',
    slug: 'el-silencio-del-culpable',
    involucrados: 3
  },
  {
    id: 2,
    titulo: 'El misterio del parque',
    investigador: 'Detective Martínez',
    ubicacion: 'Parque Central',
    fecha: '07/06/2025',
    estado: 'En progreso',
    prioridad: 'Media',
    descripcion: 'Investigación de una desaparición en el parque central.',
    slug: 'el-misterio-del-parque',
    involucrados: 2
  },
  {
    id: 3,
    titulo: 'El caso de la joyería',
    investigador: 'Detective Sánchez',
    ubicacion: 'Calle 50 # 20-15',
    fecha: '07/06/2025',
    estado: 'Resuelto',
    prioridad: 'Alta',
    descripcion: 'Robo de joyas en una prestigiosa joyería.',
    slug: 'el-caso-de-la-joyeria',
    involucrados: 4
  },
  {
    id: 4,
    titulo: 'El misterio del hotel',
    investigador: 'Detective Rodríguez',
    ubicacion: 'Hotel Grand',
    fecha: '07/06/2025',
    estado: 'Cerrado',
    prioridad: 'Baja',
    descripcion: 'Desaparición de un huésped en el hotel.',
    slug: 'el-misterio-del-hotel',
    involucrados: 1
  }
];
