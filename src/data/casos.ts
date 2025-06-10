export interface Capitulo {
  titulo: string;
  contenido: string;
}

export interface HistoriaCaso {
  introduccion: string;
  escenario: string;
  capitulos: Capitulo[];
  temas: string[];
}

export interface Caso {
  id: number;
  titulo: string;
  investigador: string;
  ubicacion: string;
  fecha: string;
  estado: string;
  prioridad: string;
  descripcion: string;
  sinopsis: string;
  slug: string;
  imagen: string;
  involucrados: number;
  historia: HistoriaCaso;
}

export const casos: Caso[] = [
  {
    id: 1,
    titulo: "La Ecuación de los Lemures",
    investigador: "Rivo Andriamatoa",
    ubicacion: "Región de Menabe, Madagascar",
    fecha: "2025",
    estado: "Activo",
    prioridad: "Alta",
    descripcion:
      "Investigación de la muerte del Dr. Lucien Varda y la conexión con experimentos genéticos en lemures.",
    sinopsis:
      "En la remota región de Menabe, Madagascar, un detective local investiga la muerte de un científico francés y descubre una red de desapariciones y manipulación genética.",
    slug: "la-ecuacion-de-los-lemures",
    imagen: "/image-cases/la-ecuacion-de-los-lemures.png",
    involucrados: 15,
    historia: {
      introduccion:
        "En la remota región de Menabe, Madagascar, un detective local de origen sakalava, Rivo Andriamatoa, es llamado para investigar la muerte de un renombrado científico francés. Lo que parece un accidente, se convierte en una red de desapariciones, manipulación genética y control mental disfrazado de salud pública.",
      escenario:
        "Madagascar, región oeste, bosque seco de Menabe-Antimena. Una tierra única, calurosa y polvorienta. Las sombras de los baobabs se proyectan como testigos inmóviles de un crimen aún no comprendido.",
      capitulos: [
        {
          titulo: "La Llamada del Baobab",
          contenido:
            "Rivo Andriamatoa es un detective veterano y escéptico, antiguo policía de Antananarivo. La muerte del Dr. Lucien Varda —encontrado con una mueca de horror— rompe su calma. Varda investigaba el descenso de lemures y había mostrado paranoia antes de morir.",
        },
        {
          titulo: "El Cuaderno de Lucien",
          contenido:
            "Rivo encuentra un cuaderno cifrado y referencias al Proyecto Éphémère. Se revela una correlación entre desapariciones de lemures y campañas de vacunación financiadas por Kyriotek, una biotecnológica con presencia en África.",
        },
        {
          titulo: "Un Experimento a Escala",
          contenido:
            "En pueblos donde Varda investigó, los ancianos afirman que los lemures han dejado de cantar. Se descubre que la vacuna no inmunizaba: reprogramaba. Lemures fueron usados por su sensibilidad neuronal como sujetos de prueba.",
        },
        {
          titulo: "Sin Pensamiento Propio",
          contenido:
            "Kyriotek buscaba inducir deseos mediante nanoportadores que alteran centros cerebrales. No zombis, sino consumidores preconfigurados. Lucien lo descubrió al analizar cerebros de lemures con patrones sinápticos artificiales.",
        },
        {
          titulo: "La Trampa",
          contenido:
            "Lucien fue asesinado por un 'operador de contención'. Rivo salva una copia del cuaderno y la entrega a una periodista, Noro Raharison, quien publica un reportaje titulado 'Los Lemures del Silencio'.",
        },
      ],
      temas: [
        "Colonialismo moderno",
        "Biopoder",
        "Identidad y consumo",
        "Ética científica",
        "Psicología y manipulación",
      ],
    },
  },
];
