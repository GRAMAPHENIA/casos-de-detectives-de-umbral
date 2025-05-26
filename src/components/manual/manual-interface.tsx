"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  BookOpen,
  Target,
  Star,
  Trophy,
  Lightbulb,
  Camera,
  Users,
  FileText,
  Zap,
  Eye,
  Brain,
  Map,
  CheckCircle,
} from "lucide-react"

const manualSections = [
  {
    id: "basics",
    title: "Conceptos Básicos",
    icon: BookOpen,
    color: "text-blue-600 dark:text-blue-400",
    content: {
      overview: "Aprende los fundamentos del juego de investigación detectivesca.",
      topics: [
        {
          title: "¿Qué es Detective Game?",
          content:
            "Detective Game es un juego de investigación inmersivo donde asumes el rol de un detective profesional. Tu objetivo es resolver casos misteriosos usando lógica, observación y análisis de evidencias en un entorno realista.",
          details: [
            "Casos basados en situaciones reales de investigación",
            "Sistema de progresión que refleja el crecimiento profesional",
            "Mecánicas de juego que enseñan técnicas detectivescas reales",
            "Múltiples tipos de casos: robos, desapariciones, fraudes, etc.",
          ],
        },
        {
          title: "Objetivo Principal",
          content:
            "Resolver casos encontrando pistas, analizándolas correctamente y construyendo una teoría coherente que explique qué pasó, quién lo hizo y por qué.",
          details: [
            "Identificar al culpable con evidencia sólida",
            "Establecer el método utilizado en el crimen",
            "Determinar el motivo detrás del acto",
            "Construir una línea temporal precisa de los eventos",
          ],
        },
        {
          title: "Progresión del Jugador",
          content:
            "Ganas experiencia (EXP) completando acciones. Al acumular suficiente EXP, subes de nivel y desbloqueas nuevas habilidades y casos más complejos.",
          details: [
            "Sistema de niveles del 1 al 50",
            "Cada nivel desbloquea nuevas herramientas",
            "Acceso a casos de mayor dificultad",
            "Logros especiales por hitos importantes",
          ],
        },
      ],
    },
  },
  {
    id: "clues",
    title: "Sistema de Pistas",
    icon: Search,
    color: "text-green-600 dark:text-green-400",
    content: {
      overview: "Las pistas son el corazón del juego. Comprende cómo encontrarlas y usarlas efectivamente.",
      topics: [
        {
          title: "Tipos de Pistas",
          content: "El juego incluye múltiples tipos de pistas, cada una con características únicas:",
          subtopics: [
            {
              icon: Camera,
              title: "Evidencia Física",
              description: "Objetos tangibles, huellas dactilares, fotografías, armas",
              examples: ["Huellas en una superficie", "Cabello encontrado en la escena", "Arma del crimen"],
            },
            {
              icon: Users,
              title: "Testimonios",
              description: "Declaraciones de testigos, víctimas y sospechosos",
              examples: ["Testimonio de un testigo ocular", "Coartada de un sospechoso", "Declaración de la víctima"],
            },
            {
              icon: FileText,
              title: "Documentos",
              description: "Reportes oficiales, cartas, registros, facturas",
              examples: ["Informe forense", "Registro de llamadas", "Recibos de compra"],
            },
            {
              icon: Brain,
              title: "Conexiones Lógicas",
              description: "Relaciones entre diferentes pistas y evidencias",
              examples: ["Contradicción en testimonios", "Patrón en múltiples casos", "Motivo oculto"],
            },
          ],
        },
        {
          title: "Estados de las Pistas",
          content: "Las pistas pasan por diferentes estados durante la investigación:",
          subtopics: [
            {
              status: "available",
              title: "Disponibles",
              description: "Pistas que puedes descubrir inmediatamente",
              color: "text-green-600 dark:text-green-400",
            },
            {
              status: "locked",
              title: "Bloqueadas",
              description: "Requieren analizar otras pistas primero",
              color: "text-red-600 dark:text-red-400",
            },
            {
              status: "discovered",
              title: "Descubiertas",
              description: "Encontradas pero aún no analizadas",
              color: "text-blue-600 dark:text-blue-400",
            },
            {
              status: "analyzed",
              title: "Analizadas",
              description: "Completamente procesadas y comprendidas",
              color: "text-purple-600 dark:text-purple-400",
            },
          ],
        },
        {
          title: "Dependencias entre Pistas",
          content:
            "El sistema de pistas está interconectado. Analizar una pista puede desbloquear 1-3 pistas nuevas, creando un árbol de investigación complejo que debes navegar estratégicamente.",
          details: [
            "Cada pista puede tener prerequisitos específicos",
            "Algunas pistas requieren múltiples análisis previos",
            "El orden de investigación afecta la eficiencia",
            "Pistas críticas pueden cambiar toda la dirección del caso",
          ],
        },
      ],
    },
  },
  {
    id: "investigation",
    title: "Proceso de Investigación",
    icon: Target,
    color: "text-purple-600 dark:text-purple-400",
    content: {
      overview: "Domina el flujo completo de una investigación profesional exitosa.",
      topics: [
        {
          title: "Fase 1: Evaluación Inicial",
          content:
            "Comienza evaluando la escena y las pistas iniciales disponibles. Esta fase establece las bases de toda tu investigación.",
          steps: [
            "Examina cuidadosamente la escena del crimen",
            "Identifica todas las pistas obvias disponibles",
            "Lee las descripciones iniciales completamente",
            "Establece una hipótesis preliminar del caso",
          ],
          tips: "No te apresures en esta fase. Una evaluación inicial sólida puede ahorrarte tiempo más adelante.",
        },
        {
          title: "Fase 2: Descubrimiento Sistemático",
          content: "Descubre pistas de manera metódica, priorizando aquellas que pueden desbloquear más información.",
          steps: [
            "Prioriza pistas que desbloquean múltiples opciones",
            "Mantén un registro de todas las pistas encontradas",
            "Busca patrones en los tipos de evidencia",
            "No ignores pistas que parecen irrelevantes",
          ],
          tips: "Algunas pistas aparentemente menores pueden ser clave para resolver el caso.",
        },
        {
          title: "Fase 3: Análisis Profundo",
          content:
            "Analiza cada pista escribiendo observaciones detalladas. Un análisis de calidad puede desbloquear múltiples pistas nuevas.",
          steps: [
            "Escribe observaciones específicas y detalladas",
            "Considera múltiples interpretaciones posibles",
            "Conecta la pista con evidencia previa",
            "Busca inconsistencias o contradicciones",
          ],
          tips: "Los mejores análisis consideran tanto lo que la pista revela como lo que oculta.",
        },
        {
          title: "Fase 4: Síntesis y Resolución",
          content:
            "Usa todas tus notas y análisis para construir una teoría coherente del caso. Esta es la fase más crítica.",
          steps: [
            "Revisa todas las pistas analizadas",
            "Identifica conexiones entre diferentes evidencias",
            "Construye una línea temporal de eventos",
            "Desarrolla una teoría que explique toda la evidencia",
          ],
          tips: "Una buena teoría debe explicar toda la evidencia disponible sin contradicciones.",
        },
      ],
    },
  },
  {
    id: "experience",
    title: "Sistema de Experiencia",
    icon: Star,
    color: "text-yellow-600 dark:text-yellow-400",
    content: {
      overview: "Comprende cómo ganar experiencia eficientemente y progresar en tu carrera detectivesca.",
      topics: [
        {
          title: "Fuentes de Experiencia",
          content: "Múltiples actividades otorgan experiencia, cada una con diferentes valores:",
          sources: [
            {
              action: "Descubrir pista básica",
              exp: "10-15 EXP",
              description: "Encontrar pistas simples y obvias",
            },
            {
              action: "Descubrir pista compleja",
              exp: "15-25 EXP",
              description: "Encontrar pistas ocultas o difíciles",
            },
            {
              action: "Análisis básico",
              exp: "15-25 EXP",
              description: "Análisis simple de evidencia",
            },
            {
              action: "Análisis detallado",
              exp: "25-40 EXP",
              description: "Análisis profundo que desbloquea múltiples pistas",
            },
            {
              action: "Resolver caso fácil",
              exp: "50-100 EXP",
              description: "Completar casos de dificultad básica",
            },
            {
              action: "Resolver caso difícil",
              exp: "100-300 EXP",
              description: "Completar casos complejos y desafiantes",
            },
            {
              action: "Logros especiales",
              exp: "25-150 EXP",
              description: "Hitos únicos y desafíos especiales",
            },
          ],
        },
        {
          title: "Progresión de Niveles",
          content: "Cada nivel desbloquea nuevas capacidades y oportunidades:",
          levels: [
            {
              level: "1-5",
              title: "Detective Novato",
              benefits: ["Casos básicos", "Herramientas estándar", "Tutorial completo"],
            },
            {
              level: "6-15",
              title: "Detective Junior",
              benefits: ["Casos intermedios", "Análisis avanzado", "Pistas especiales"],
            },
            {
              level: "16-30",
              title: "Detective Senior",
              benefits: ["Casos complejos", "Herramientas profesionales", "Casos en equipo"],
            },
            {
              level: "31-45",
              title: "Detective Experto",
              benefits: ["Casos extremos", "Herramientas especializadas", "Mentoría"],
            },
            {
              level: "46-50",
              title: "Detective Maestro",
              benefits: ["Casos únicos", "Todas las herramientas", "Casos personalizados"],
            },
          ],
        },
        {
          title: "Estrategias de Optimización",
          content: "Técnicas para maximizar tu ganancia de experiencia:",
          strategies: [
            "Analiza todas las pistas disponibles antes de resolver",
            "Escribe análisis detallados y reflexivos",
            "Busca conexiones ocultas entre evidencias",
            "Completa logros secundarios en cada caso",
            "Participa en desafíos especiales cuando estén disponibles",
          ],
        },
      ],
    },
  },
  {
    id: "solving",
    title: "Resolviendo Casos",
    icon: Trophy,
    color: "text-orange-600 dark:text-orange-400",
    content: {
      overview: "Domina el arte de presentar soluciones convincentes y bien fundamentadas.",
      topics: [
        {
          title: "Requisitos Mínimos",
          content: "Antes de intentar resolver un caso, asegúrate de cumplir estos requisitos:",
          requirements: [
            {
              requirement: "Pistas Descubiertas",
              minimum: "6-8 pistas",
              description: "Suficiente información para formar una teoría completa",
            },
            {
              requirement: "Pistas Analizadas",
              minimum: "4-6 pistas",
              description: "Análisis profundo de evidencia clave",
            },
            {
              requirement: "Teoría Coherente",
              minimum: "Completa",
              description: "Explicación que conecta toda la evidencia",
            },
            {
              requirement: "Identificación del Culpable",
              minimum: "Con evidencia",
              description: "Sospechoso identificado con pruebas sólidas",
            },
          ],
        },
        {
          title: "Estructura de la Solución",
          content: "Una solución completa debe abordar estos elementos clave:",
          elements: [
            {
              element: "¿Quién?",
              description: "Identifica claramente al culpable",
              details: "Nombre, motivo, oportunidad y medios",
            },
            {
              element: "¿Cómo?",
              description: "Explica el método utilizado",
              details: "Secuencia de eventos, herramientas usadas, técnicas empleadas",
            },
            {
              element: "¿Por qué?",
              description: "Establece el motivo del crimen",
              details: "Razones personales, financieras, emocionales o de venganza",
            },
            {
              element: "¿Cuándo?",
              description: "Determina el momento exacto",
              details: "Línea temporal precisa, coartadas verificadas",
            },
            {
              element: "¿Dónde?",
              description: "Confirma la ubicación del crimen",
              details: "Escena principal, ubicaciones secundarias relevantes",
            },
          ],
        },
        {
          title: "Criterios de Evaluación",
          content: "El sistema evalúa tu solución basándose en múltiples factores:",
          criteria: [
            {
              factor: "Uso de Evidencia",
              weight: "30%",
              description: "Qué tan bien incorporas las pistas analizadas",
            },
            {
              factor: "Lógica y Coherencia",
              weight: "25%",
              description: "Consistencia interna de tu teoría",
            },
            {
              factor: "Completitud",
              weight: "20%",
              description: "Si abordas todos los aspectos del caso",
            },
            {
              factor: "Precisión",
              weight: "15%",
              description: "Exactitud de tu identificación del culpable",
            },
            {
              factor: "Creatividad",
              weight: "10%",
              description: "Originalidad en las conexiones realizadas",
            },
          ],
        },
      ],
    },
  },
  {
    id: "advanced",
    title: "Técnicas Avanzadas",
    icon: Brain,
    color: "text-indigo-600 dark:text-indigo-400",
    content: {
      overview: "Estrategias profesionales para detectives experimentados.",
      topics: [
        {
          title: "Análisis de Patrones",
          content: "Identifica patrones ocultos en la evidencia para resolver casos más eficientemente:",
          techniques: [
            "Análisis temporal: Busca patrones en horarios y fechas",
            "Análisis geográfico: Identifica conexiones por ubicación",
            "Análisis conductual: Estudia patrones en el comportamiento del sospechoso",
            "Análisis forense: Conecta evidencia física de manera sistemática",
          ],
        },
        {
          title: "Gestión de Información",
          content: "Organiza y procesa grandes cantidades de información de manera efectiva:",
          methods: [
            "Sistema de categorización de pistas por relevancia",
            "Mapas mentales para visualizar conexiones",
            "Líneas temporales detalladas de eventos",
            "Matrices de sospechosos vs. evidencia",
          ],
        },
        {
          title: "Técnicas de Interrogatorio",
          content: "Maximiza la información obtenida de testimonios y declaraciones:",
          approaches: [
            "Identifica inconsistencias en declaraciones múltiples",
            "Busca detalles que solo el culpable conocería",
            "Analiza el lenguaje corporal y las reacciones emocionales",
            "Contrasta testimonios con evidencia física",
          ],
        },
      ],
    },
  },
  {
    id: "tips",
    title: "Consejos de Expertos",
    icon: Lightbulb,
    color: "text-red-600 dark:text-red-400",
    content: {
      overview: "Sabiduría acumulada de detectives veteranos para acelerar tu progreso.",
      topics: [
        {
          title: "Gestión Eficiente de Casos",
          content: "Optimiza tu flujo de trabajo para resolver casos más rápidamente:",
          tips: [
            "Siempre lee todas las pistas disponibles antes de comenzar el análisis",
            "Mantén notas organizadas desde el primer momento",
            "Prioriza pistas que desbloquean múltiples opciones",
            "No te obsesiones con una sola teoría - mantén la mente abierta",
          ],
        },
        {
          title: "Errores Comunes a Evitar",
          content: "Aprende de los errores más frecuentes para evitar frustraciones:",
          mistakes: [
            {
              error: "Resolver prematuramente",
              consequence: "Puntuación baja y pérdida de EXP",
              solution: "Asegúrate de tener suficiente evidencia antes de resolver",
            },
            {
              error: "Ignorar pistas 'irrelevantes'",
              consequence: "Perder conexiones importantes",
              solution: "Analiza todas las pistas disponibles, incluso las que parecen menores",
            },
            {
              error: "No tomar notas detalladas",
              consequence: "Perder el hilo en casos complejos",
              solution: "Usa el sistema de notas activamente desde el inicio",
            },
            {
              error: "Asumir sin evidencia",
              consequence: "Teorías incorrectas y soluciones fallidas",
              solution: "Basa todas las conclusiones en evidencia sólida",
            },
          ],
        },
        {
          title: "Maximización de Puntuación",
          content: "Estrategias para obtener las mejores calificaciones posibles:",
          strategies: [
            "Completa el 100% de las pistas antes de resolver",
            "Escribe análisis detallados que demuestren pensamiento crítico",
            "Encuentra conexiones creativas pero lógicas entre evidencias",
            "Presenta soluciones bien estructuradas y completas",
            "Busca logros ocultos y desafíos especiales en cada caso",
          ],
        },
      ],
    },
  },
]

export function ManualInterface() {
  const [selectedSection, setSelectedSection] = useState("basics")
  const [searchTerm, setSearchTerm] = useState("")
  const [readingProgress, setReadingProgress] = useState<{ [key: string]: boolean }>({})

  const currentSection = manualSections.find((section) => section.id === selectedSection)

  const filteredSections = manualSections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.topics.some(
        (topic) =>
          topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.content.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  )

  const markAsRead = (sectionId: string) => {
    setReadingProgress((prev) => ({ ...prev, [sectionId]: true }))
  }

  const completedSections = Object.keys(readingProgress).length
  const totalSections = manualSections.length
  const progressPercentage = (completedSections / totalSections) * 100

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <Card className="border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                Manual Completo del Detective
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Guía exhaustiva para dominar el arte de la investigación detectivesca profesional
              </p>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {Math.round(progressPercentage)}% Completado
              </Badge>
              <div className="text-xs text-muted-foreground mt-1">
                {completedSections}/{totalSections} secciones leídas
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar en el manual..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-sm">
                <span>Progreso de Lectura</span>
                <span>
                  {completedSections}/{totalSections} secciones
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Índice */}
        <div className="lg:col-span-1">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="text-base">Índice de Contenidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {filteredSections.map((section) => {
                  const Icon = section.icon
                  const isRead = readingProgress[section.id]
                  return (
                    <Button
                      key={section.id}
                      variant={selectedSection === section.id ? "secondary" : "ghost"}
                      className="w-full justify-start h-auto p-3 relative"
                      onClick={() => setSelectedSection(section.id)}
                    >
                      <Icon className={`h-4 w-4 mr-3 ${section.color}`} />
                      <div className="flex-1 text-left">
                        <span className="text-sm">{section.title}</span>
                        {isRead && (
                          <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 absolute top-2 right-2" />
                        )}
                      </div>
                    </Button>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contenido */}
        <div className="lg:col-span-3">
          {currentSection && (
            <Card className="border-border/40">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <currentSection.icon className={`h-5 w-5 ${currentSection.color}`} />
                    {currentSection.title}
                  </CardTitle>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => markAsRead(currentSection.id)}
                    disabled={readingProgress[currentSection.id]}
                  >
                    {readingProgress[currentSection.id] ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Leído
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4 mr-2" />
                        Marcar como Leído
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">{currentSection.content.overview}</p>
              </CardHeader>
              <CardContent className="space-y-8">
                {currentSection.content.topics.map((topic, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold border-b border-border/40 pb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{topic.content}</p>

                    {/* Detalles adicionales */}
                    {(topic as any).details && (
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Detalles importantes:</h4>
                        <div className="grid gap-2">
                          {(topic as any).details.map((detail: string, detailIndex: number) => (
                            <div key={detailIndex} className="flex items-start gap-2 p-2 bg-muted/30 rounded">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <p className="text-sm">{detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Subtemas con iconos */}
                    {(topic as any).subtopics && (
                      <div className="space-y-3">
                        {(topic as any).subtopics.map((subtopic: any, subIndex: number) => (
                          <div key={subIndex} className="p-4 border border-border/40 rounded-lg bg-background">
                            <div className="flex items-start gap-3">
                              {subtopic.icon && <subtopic.icon className="h-5 w-5 text-muted-foreground mt-0.5" />}
                              <div className="flex-1">
                                <h5 className="font-medium text-sm mb-1">{subtopic.title}</h5>
                                <p className="text-sm text-muted-foreground mb-2">{subtopic.description}</p>
                                {subtopic.examples && (
                                  <div className="space-y-1">
                                    <span className="text-xs font-medium text-muted-foreground">Ejemplos:</span>
                                    {subtopic.examples.map((example: string, exIndex: number) => (
                                      <div key={exIndex} className="text-xs text-muted-foreground ml-2">
                                        • {example}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {subtopic.status && (
                                  <Badge variant="outline" className={`text-xs ${subtopic.color}`}>
                                    {subtopic.title}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Pasos del proceso */}
                    {(topic as any).steps && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Pasos a seguir:</h4>
                        <div className="space-y-2">
                          {(topic as any).steps.map((step: string, stepIndex: number) => (
                            <div
                              key={stepIndex}
                              className="flex items-start gap-3 p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <p className="text-sm">{step}</p>
                            </div>
                          ))}
                        </div>
                        {(topic as any).tips && (
                          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                              <p className="text-sm text-blue-800 dark:text-blue-200">{(topic as any).tips}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Fuentes de experiencia */}
                    {(topic as any).sources && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Fuentes de Experiencia:</h4>
                        <div className="grid gap-3">
                          {(topic as any).sources.map((source: any, sourceIndex: number) => (
                            <div
                              key={sourceIndex}
                              className="flex items-center justify-between p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <div>
                                <span className="font-medium text-sm">{source.action}</span>
                                <p className="text-xs text-muted-foreground">{source.description}</p>
                              </div>
                              <Badge
                                variant="secondary"
                                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              >
                                {source.exp}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Niveles de progresión */}
                    {(topic as any).levels && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Niveles de Progresión:</h4>
                        <div className="space-y-3">
                          {(topic as any).levels.map((level: any, levelIndex: number) => (
                            <div key={levelIndex} className="p-4 border border-border/40 rounded-lg bg-background">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline">{level.level}</Badge>
                                <span className="font-medium text-sm">{level.title}</span>
                              </div>
                              <div className="space-y-1">
                                {level.benefits.map((benefit: string, benefitIndex: number) => (
                                  <div key={benefitIndex} className="text-sm text-muted-foreground">
                                    • {benefit}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Estrategias */}
                    {(topic as any).strategies && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Estrategias Recomendadas:</h4>
                        <div className="space-y-2">
                          {(topic as any).strategies.map((strategy: string, strategyIndex: number) => (
                            <div
                              key={strategyIndex}
                              className="flex items-start gap-2 p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <Target className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm">{strategy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Requisitos */}
                    {(topic as any).requirements && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Requisitos:</h4>
                        <div className="grid gap-3">
                          {(topic as any).requirements.map((req: any, reqIndex: number) => (
                            <div
                              key={reqIndex}
                              className="flex items-center justify-between p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <div>
                                <span className="font-medium text-sm">{req.requirement}</span>
                                <p className="text-xs text-muted-foreground">{req.description}</p>
                              </div>
                              <Badge variant="outline">{req.minimum}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Elementos de solución */}
                    {(topic as any).elements && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Elementos de la Solución:</h4>
                        <div className="grid gap-3">
                          {(topic as any).elements.map((element: any, elementIndex: number) => (
                            <div key={elementIndex} className="p-4 border border-border/40 rounded-lg bg-background">
                              <div className="font-medium text-sm text-purple-600 dark:text-purple-400 mb-1">
                                {element.element}
                              </div>
                              <p className="text-sm mb-2">{element.description}</p>
                              <p className="text-xs text-muted-foreground">{element.details}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Criterios de evaluación */}
                    {(topic as any).criteria && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Criterios de Evaluación:</h4>
                        <div className="space-y-3">
                          {(topic as any).criteria.map((criterion: any, criterionIndex: number) => (
                            <div key={criterionIndex} className="p-3 border border-border/40 rounded-lg bg-background">
                              <div className="flex items-center justify-between mb-2">
                                <span className="font-medium text-sm">{criterion.factor}</span>
                                <Badge variant="secondary">{criterion.weight}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{criterion.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Técnicas avanzadas */}
                    {(topic as any).techniques && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Técnicas:</h4>
                        <div className="space-y-2">
                          {(topic as any).techniques.map((technique: string, techIndex: number) => (
                            <div
                              key={techIndex}
                              className="flex items-start gap-2 p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <Brain className="h-4 w-4 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm">{technique}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Métodos */}
                    {(topic as any).methods && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Métodos:</h4>
                        <div className="space-y-2">
                          {(topic as any).methods.map((method: string, methodIndex: number) => (
                            <div
                              key={methodIndex}
                              className="flex items-start gap-2 p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <Map className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm">{method}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Enfoques */}
                    {(topic as any).approaches && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Enfoques:</h4>
                        <div className="space-y-2">
                          {(topic as any).approaches.map((approach: string, approachIndex: number) => (
                            <div
                              key={approachIndex}
                              className="flex items-start gap-2 p-3 border border-border/40 rounded-lg bg-background"
                            >
                              <Eye className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm">{approach}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Consejos */}
                    {Array.isArray((topic as any).tips) && (topic as any).tips.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Consejos:</h4>
                        <div className="space-y-2">
                          {(topic as any).tips.map((tip: string, tipIndex: number) => (
                            <div
                              key={tipIndex}
                              className="flex items-start gap-2 p-3 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg"
                            >
                              <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400 mt-0.5 flex-shrink-0" />
                              <p className="text-sm text-yellow-800 dark:text-yellow-200">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Errores comunes */}
                    {(topic as any).mistakes && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Errores Comunes a Evitar:</h4>
                        <div className="space-y-3">
                          {(topic as any).mistakes.map((mistake: any, mistakeIndex: number) => (
                            <div
                              key={mistakeIndex}
                              className="p-4 border border-red-200 dark:border-red-800 rounded-lg bg-red-50 dark:bg-red-950"
                            >
                              <div className="font-medium text-sm text-red-800 dark:text-red-200 mb-1">
                                ❌ {mistake.error}
                              </div>
                              <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                                <strong>Consecuencia:</strong> {mistake.consequence}
                              </p>
                              <p className="text-sm text-red-700 dark:text-red-300">
                                <strong>Solución:</strong> {mistake.solution}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Secciones de referencia rápida específicas */}
                {selectedSection === "basics" && (
                  <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                    <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-4 flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Referencia Rápida para Principiantes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-blue-700 dark:text-blue-300">Controles Básicos:</span>
                        <div className="space-y-1 mt-2">
                          <div>• Clic = Descubrir pista</div>
                          <div>• Analizar = Escribir observación</div>
                          <div>• Resolver = Presentar teoría</div>
                          <div>• Notas = Registrar información</div>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-blue-700 dark:text-blue-300">Objetivos Principales:</span>
                        <div className="space-y-1 mt-2">
                          <div>• Encontrar todas las pistas</div>
                          <div>• Analizar evidencias clave</div>
                          <div>• Conectar información</div>
                          <div>• Resolver el misterio</div>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-blue-700 dark:text-blue-300">Primeros Pasos:</span>
                        <div className="space-y-1 mt-2">
                          <div>• Completa el tutorial</div>
                          <div>• Practica con casos fáciles</div>
                          <div>• Lee este manual</div>
                          <div>• Toma notas detalladas</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {selectedSection === "clues" && (
                  <div className="mt-8 p-6 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <h4 className="font-medium text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
                      <Search className="h-4 w-4" />
                      Guía Visual de Iconos de Pistas
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded">
                        <Camera className="h-5 w-5 text-blue-600" />
                        <span>Evidencia Física</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded">
                        <Users className="h-5 w-5 text-green-600" />
                        <span>Testimonio</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded">
                        <FileText className="h-5 w-5 text-orange-600" />
                        <span>Documento</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded">
                        <Brain className="h-5 w-5 text-purple-600" />
                        <span>Conexión Lógica</span>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
