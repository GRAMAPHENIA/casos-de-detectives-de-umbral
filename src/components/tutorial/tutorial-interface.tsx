"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, ArrowLeft, CheckCircle, Lightbulb, Target, Trophy, SkipForward } from "lucide-react"
import { TutorialStep } from "./tutorial-step"
import { useRouter } from "next/navigation"

const tutorialSteps = [
  {
    id: 1,
    title: "¡Bienvenido, Detective!",
    description: "Aprende los conceptos básicos del juego de investigación",
    estimatedTime: "2 min",
    content: {
      type: "introduction",
      text: "En Detective Game, eres un detective profesional que debe resolver casos misteriosos. Tu objetivo es encontrar pistas, analizarlas y usar la lógica para resolver crímenes complejos.",
      highlights: [
        "🔍 Encuentra pistas ocultas en cada escena",
        "🧠 Analiza la evidencia cuidadosamente",
        "⭐ Gana experiencia con cada acción",
        "🏆 Resuelve casos para subir de nivel",
      ],
      tips: "La paciencia y la observación son las herramientas más importantes de un detective.",
    },
  },
  {
    id: 2,
    title: "Sistema de Pistas",
    description: "Comprende cómo funcionan las pistas y su interconexión",
    estimatedTime: "3 min",
    content: {
      type: "explanation",
      text: "Las pistas son la clave para resolver casos. Algunas están disponibles desde el inicio, mientras que otras se desbloquean al analizar pistas previas, creando un árbol de investigación.",
      interactive: {
        type: "clue-demo",
        clues: [
          {
            id: "demo-1",
            title: "Puerta Forzada",
            description: "La puerta muestra signos de haber sido forzada",
            status: "available",
            category: "evidence",
            reward: 15,
          },
          {
            id: "demo-2",
            title: "Huellas Misteriosas",
            description: "Se requiere analizar la puerta forzada",
            status: "locked",
            category: "evidence",
            reward: 20,
          },
        ],
      },
      tips: "Cada pista analizada puede desbloquear 1-3 pistas nuevas. ¡Explora todas las posibilidades!",
    },
  },
  {
    id: 3,
    title: "Descubriendo Pistas",
    description: "Aprende a encontrar y descubrir nuevas pistas",
    estimatedTime: "2 min",
    content: {
      type: "interactive",
      text: "Haz clic en las pistas disponibles para descubrirlas. Cada pista descubierta te dará experiencia y puede revelar información crucial para el caso.",
      action: "discover-clue",
      tips: "Lee cuidadosamente la descripción de cada pista antes de analizarla.",
    },
  },
  {
    id: 4,
    title: "Analizando Evidencia",
    description: "Aprende a analizar pistas para obtener información valiosa",
    estimatedTime: "4 min",
    content: {
      type: "interactive",
      text: "Una vez descubierta una pista, debes analizarla escribiendo tus observaciones. Un análisis detallado puede desbloquear múltiples pistas nuevas y darte más experiencia.",
      action: "analyze-clue",
      tips: "Escribe análisis detallados y considera múltiples interpretaciones de la evidencia.",
    },
  },
  {
    id: 5,
    title: "Sistema de Experiencia",
    description: "Comprende cómo ganar experiencia y subir de nivel",
    estimatedTime: "3 min",
    content: {
      type: "explanation",
      text: "Cada acción en el juego te otorga experiencia (EXP). Acumula EXP para subir de nivel y desbloquear nuevas habilidades, casos más complejos y herramientas avanzadas.",
      highlights: [
        "🔍 Descubrir pista: +10-20 EXP",
        "🧠 Analizar pista: +15-30 EXP",
        "🎯 Resolver caso: +50-200 EXP",
        "⭐ Logros especiales: +25-100 EXP",
      ],
      progression: {
        currentLevel: 1,
        currentExp: 0,
        nextLevelExp: 100,
        benefits: [
          "Nivel 2: Acceso a casos intermedios",
          "Nivel 3: Herramientas de análisis avanzado",
          "Nivel 5: Casos de alta complejidad",
          "Nivel 10: Modo detective experto",
        ],
      },
      tips: "Analiza todas las pistas disponibles para maximizar tu experiencia.",
    },
  },
  {
    id: 6,
    title: "Tomando Notas",
    description: "Aprende a usar el sistema de notas del detective",
    estimatedTime: "3 min",
    content: {
      type: "interactive",
      text: "El panel de notas es tu herramienta más importante. Úsalo para registrar conexiones entre pistas, teorías del caso y observaciones importantes.",
      action: "take-notes",
      noteExamples: [
        "Conexión entre la hora del crimen y el testimonio del testigo",
        "Inconsistencias en las declaraciones",
        "Posibles motivos del sospechoso principal",
        "Evidencia que falta por analizar",
      ],
      tips: "Mantén tus notas organizadas y actualízalas conforme descubres nueva información.",
    },
  },
  {
    id: 7,
    title: "Resolviendo el Caso",
    description: "Aprende cuándo y cómo resolver un caso",
    estimatedTime: "4 min",
    content: {
      type: "explanation",
      text: "Para resolver un caso necesitas suficientes pistas analizadas y una teoría coherente. El juego te indicará cuándo estás listo para presentar tu solución.",
      requirements: [
        "Mínimo 6 pistas encontradas",
        "Al menos 4 pistas completamente analizadas",
        "Una teoría coherente del caso",
        "Identificación del culpable y motivo",
      ],
      solutionStructure: {
        who: "¿Quién cometió el crimen?",
        how: "¿Cómo se ejecutó el plan?",
        why: "¿Cuál fue el motivo?",
        when: "¿Cuándo ocurrió exactamente?",
        evidence: "¿Qué evidencia lo respalda?",
      },
      tips: "No te apresures a resolver. Una investigación completa siempre da mejores resultados.",
    },
  },
  {
    id: 8,
    title: "Estrategias Avanzadas",
    description: "Técnicas para convertirte en un detective experto",
    estimatedTime: "5 min",
    content: {
      type: "explanation",
      text: "Domina estas estrategias avanzadas para resolver casos más eficientemente y obtener mejores puntuaciones.",
      strategies: [
        {
          title: "Priorización de Pistas",
          description: "Enfócate primero en pistas que desbloquean múltiples opciones",
          example: "Una cámara de seguridad puede revelar tanto el momento del crimen como la identidad del sospechoso",
        },
        {
          title: "Análisis Cruzado",
          description: "Compara información de diferentes fuentes para encontrar inconsistencias",
          example: "Contrasta testimonios de testigos con evidencia física",
        },
        {
          title: "Teorías Múltiples",
          description: "Desarrolla varias teorías del caso simultáneamente",
          example: "Considera diferentes motivos y métodos hasta que la evidencia confirme uno",
        },
      ],
      tips: "Los mejores detectives siempre consideran múltiples posibilidades antes de llegar a una conclusión.",
    },
  },
  {
    id: 9,
    title: "¡Práctica Completada!",
    description: "Estás listo para comenzar tu carrera como detective",
    estimatedTime: "1 min",
    content: {
      type: "completion",
      text: "¡Felicitaciones! Has completado el tutorial completo. Ahora tienes todas las herramientas necesarias para resolver tu primer caso real y comenzar tu carrera como detective profesional.",
      rewards: [
        "+100 EXP de Tutorial Completo",
        "Logro: Estudiante Aplicado",
        "Acceso a todos los casos básicos",
        "Herramientas de detective desbloqueadas",
        "Manual del detective disponible",
      ],
      nextSteps: [
        "Explora el Manual del Detective para información detallada",
        "Comienza con casos de dificultad 'Fácil'",
        "Practica el análisis de pistas en casos de entrenamiento",
        "Únete a la comunidad de detectives para consejos",
      ],
      tips: "Recuerda: cada caso resuelto te acerca más a convertirte en un detective experto.",
    },
  },
]

export function TutorialInterface() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [demoClueDiscovered, setDemoClueDiscovered] = useState(false)
  const [demoClueAnalyzed, setDemoClueAnalyzed] = useState(false)
  const [demoNotesTaken, setDemoNotesTaken] = useState(false)
  const [showSkipDialog, setShowSkipDialog] = useState(false)
  const router = useRouter()

  const progress = (currentStep / tutorialSteps.length) * 100
  const currentStepData = tutorialSteps.find((step) => step.id === currentStep)
  const totalTime = tutorialSteps.reduce((sum, step) => sum + Number.parseInt(step.estimatedTime), 0)

  const handleNext = () => {
    if (currentStep < tutorialSteps.length) {
      setCompletedSteps((prev) => [...prev, currentStep])
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    // Marcar tutorial como completado y redirigir
    router.push("/")
  }

  const handleSkipTutorial = () => {
    router.push("/")
  }

  const canProceed = () => {
    if (currentStep === 3) return demoClueDiscovered
    if (currentStep === 4) return demoClueAnalyzed
    if (currentStep === 6) return demoNotesTaken
    return true
  }

  return (
    <div className="p-4 space-y-6">
      {/* Header del Tutorial */}
      <Card className="border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Tutorial Interactivo de Detective
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Paso {currentStep} de {tutorialSteps.length} • Tiempo estimado: ~{totalTime} minutos
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                {Math.round(progress)}% Completado
              </Badge>
              <Button variant="outline" size="sm" onClick={() => setShowSkipDialog(true)}>
                <SkipForward className="h-4 w-4 mr-2" />
                Saltar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progreso del Tutorial</span>
              <span>{currentStepData?.estimatedTime} restantes</span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      {/* Contenido del Paso Actual */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {currentStepData && (
            <TutorialStep
              step={currentStepData}
              onClueDiscover={() => setDemoClueDiscovered(true)}
              onClueAnalyze={() => setDemoClueAnalyzed(true)}
              onNotesTaken={() => setDemoNotesTaken(true)}
              demoClueDiscovered={demoClueDiscovered}
              demoClueAnalyzed={demoClueAnalyzed}
              demoNotesTaken={demoNotesTaken}
            />
          )}
        </div>

        {/* Panel Lateral */}
        <div className="space-y-4">
          {/* Progreso */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                Tu Progreso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {tutorialSteps.map((step) => (
                  <div key={step.id} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                        completedSteps.includes(step.id)
                          ? "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-300 dark:border-green-700"
                          : step.id === currentStep
                            ? "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-300 dark:border-blue-700"
                            : "bg-gray-100 text-gray-600 border-gray-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700"
                      }`}
                    >
                      {completedSteps.includes(step.id) ? <CheckCircle className="h-3 w-3" /> : step.id}
                    </div>
                    <div className="flex-1">
                      <span className={`text-sm ${step.id === currentStep ? "font-medium" : "text-muted-foreground"}`}>
                        {step.title}
                      </span>
                      <div className="text-xs text-muted-foreground">{step.estimatedTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Consejos */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                Consejo del Detective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {currentStepData?.content.tips && (
                  <p className="text-sm text-muted-foreground">💡 {currentStepData.content.tips}</p>
                )}

                {/* Consejos específicos por paso */}
                {currentStep <= 2 && !currentStepData?.content.tips && (
                  <p className="text-sm text-muted-foreground">
                    💡 Tómate tu tiempo para leer cada paso. La paciencia es clave en la investigación.
                  </p>
                )}
                {currentStep === 3 && (
                  <p className="text-sm text-muted-foreground">
                    🔍 Haz clic en la pista disponible para descubrirla y ganar experiencia.
                  </p>
                )}
                {currentStep === 4 && (
                  <p className="text-sm text-muted-foreground">
                    📝 Escribe observaciones detalladas. Mejores análisis desbloquean más pistas.
                  </p>
                )}
                {currentStep >= 7 && !currentStepData?.content.tips && (
                  <p className="text-sm text-muted-foreground">
                    🏆 Recuerda: cada caso resuelto te acerca más a convertirte en un detective experto.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Estadísticas del tutorial */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="text-base">Estadísticas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Pasos completados:</span>
                <span className="font-medium">
                  {completedSteps.length}/{tutorialSteps.length}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tiempo invertido:</span>
                <span className="font-medium">{completedSteps.length * 2} min</span>
              </div>
              <div className="flex justify-between">
                <span>EXP ganada:</span>
                <span className="font-medium text-green-600 dark:text-green-400">{completedSteps.length * 10} EXP</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controles de Navegación */}
      <Card className="border-border/40">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior
            </Button>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Paso {currentStep} de {tutorialSteps.length}
              </span>
              {!canProceed() && (
                <Badge
                  variant="secondary"
                  className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
                >
                  Completa la práctica para continuar
                </Badge>
              )}
            </div>

            {currentStep === tutorialSteps.length ? (
              <Button onClick={handleComplete}>
                <Trophy className="h-4 w-4 mr-2" />
                Completar Tutorial
              </Button>
            ) : (
              <Button onClick={handleNext} disabled={!canProceed()}>
                Siguiente
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Dialog de confirmación para saltar */}
      {showSkipDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-md mx-4">
            <CardHeader>
              <CardTitle>¿Saltar Tutorial?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                ¿Estás seguro de que quieres saltar el tutorial? Perderás la oportunidad de aprender las mecánicas
                básicas del juego.
              </p>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setShowSkipDialog(false)} className="flex-1">
                  Continuar Tutorial
                </Button>
                <Button onClick={handleSkipTutorial} className="flex-1">
                  Saltar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
