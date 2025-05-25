"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Lock,
  CheckCircle,
  Star,
  Camera,
  Edit,
  Sparkles,
  Trophy,
  Clock,
  Target,
  Lightbulb,
  StickyNote,
} from "lucide-react"

interface TutorialStepProps {
  step: any
  onClueDiscover: () => void
  onClueAnalyze: () => void
  onNotesTaken: () => void
  demoClueDiscovered: boolean
  demoClueAnalyzed: boolean
  demoNotesTaken: boolean
}

export function TutorialStep({
  step,
  onClueDiscover,
  onClueAnalyze,
  onNotesTaken,
  demoClueDiscovered,
  demoClueAnalyzed,
  demoNotesTaken,
}: TutorialStepProps) {
  const [analysis, setAnalysis] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [notes, setNotes] = useState("")

  const handleAnalyze = () => {
    if (analysis.trim()) {
      onClueAnalyze()
      setIsAnalyzing(false)
    }
  }

  const handleTakeNotes = () => {
    if (notes.trim()) {
      onNotesTaken()
    }
  }

  return (
    <Card className="border-border/40">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{step.id}</span>
            </div>
            {step.title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              <Clock className="h-3 w-3 mr-1" />
              {step.estimatedTime}
            </Badge>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{step.description}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Contenido Principal */}
        <div className="p-4 bg-muted/50 rounded-lg border border-border/40">
          <p className="text-sm leading-relaxed">{step.content.text}</p>
        </div>

        {/* Contenido Específico por Tipo */}
        {step.content.type === "introduction" && step.content.highlights && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Características Principales:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {step.content.highlights.map((highlight: string, index: number) => (
                <div key={index} className="p-3 border border-border/40 rounded-lg bg-background">
                  <p className="text-sm">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.content.type === "explanation" && step.content.highlights && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              Sistema de Recompensas:
            </h4>
            <div className="space-y-3">
              {step.content.highlights.map((highlight: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 border border-border/40 rounded-lg bg-background"
                >
                  <Star className="h-4 w-4 text-yellow-600 dark:text-yellow-400 flex-shrink-0" />
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Progresión de niveles */}
        {step.content.progression && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              Progresión de Niveles:
            </h4>
            <div className="p-4 border border-border/40 rounded-lg bg-background">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Nivel {step.content.progression.currentLevel}</span>
                <span className="text-xs text-muted-foreground">
                  {step.content.progression.currentExp}/{step.content.progression.nextLevelExp} EXP
                </span>
              </div>
              <Progress
                value={(step.content.progression.currentExp / step.content.progression.nextLevelExp) * 100}
                className="h-2 mb-3"
              />
              <div className="space-y-1">
                {step.content.progression.benefits.map((benefit: string, index: number) => (
                  <div key={index} className="text-xs text-muted-foreground">
                    • {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Estrategias avanzadas */}
        {step.content.strategies && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              Estrategias Avanzadas:
            </h4>
            <div className="space-y-4">
              {step.content.strategies.map((strategy: any, index: number) => (
                <div key={index} className="p-4 border border-border/40 rounded-lg bg-background">
                  <h5 className="font-medium text-sm mb-2">{strategy.title}</h5>
                  <p className="text-sm text-muted-foreground mb-2">{strategy.description}</p>
                  <div className="p-2 bg-blue-50 dark:bg-blue-950 rounded text-xs text-blue-700 dark:text-blue-300">
                    <strong>Ejemplo:</strong> {strategy.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.content.requirements && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
              Requisitos para Resolver:
            </h4>
            <div className="space-y-2">
              {step.content.requirements.map((req: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 border border-border/40 rounded-lg bg-background"
                >
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Estructura de solución */}
        {step.content.solutionStructure && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              Estructura de la Solución:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.entries(step.content.solutionStructure).map(([key, value]: [string, any]) => (
                <div key={key} className="p-3 border border-border/40 rounded-lg bg-background">
                  <div className="font-medium text-sm text-purple-600 dark:text-purple-400 mb-1">
                    {key.toUpperCase()}
                  </div>
                  <div className="text-sm text-muted-foreground">{value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.content.rewards && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              Recompensas del Tutorial:
            </h4>
            <div className="space-y-2">
              {step.content.rewards.map((reward: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 border border-green-200 dark:border-green-800 rounded-lg bg-green-50 dark:bg-green-950"
                >
                  <Trophy className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="text-sm text-green-800 dark:text-green-200">{reward}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Próximos pasos */}
        {step.content.nextSteps && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Próximos Pasos:
            </h4>
            <div className="space-y-2">
              {step.content.nextSteps.map((step: string, index: number) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border border-border/40 rounded-lg bg-background"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Demo Interactivo de Pistas */}
        {step.content.interactive?.type === "clue-demo" && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Ejemplo de Sistema de Pistas:
            </h4>
            {step.content.interactive.clues.map((clue: any) => (
              <div key={clue.id} className="p-4 border border-border/40 rounded-lg bg-background">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <h5 className="font-medium text-sm">{clue.title}</h5>
                      <p className="text-xs text-muted-foreground">{clue.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {clue.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      +{clue.reward} EXP
                    </Badge>
                    {clue.status === "locked" ? (
                      <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Acción Interactiva - Descubrir Pista */}
        {step.content.action === "discover-clue" && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-green-600 dark:text-green-400" />
              Práctica: Descubre tu primera pista
            </h4>
            <div
              className={`p-4 border rounded-lg transition-all cursor-pointer ${
                demoClueDiscovered
                  ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                  : "border-border/40 hover:bg-muted/50"
              }`}
              onClick={!demoClueDiscovered ? onClueDiscover : undefined}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Camera className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h5 className="font-medium text-sm">Ventana Rota</h5>
                    <p className="text-xs text-muted-foreground">Una ventana del primer piso está rota desde adentro</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="secondary"
                    className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    evidence
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    +15 EXP
                  </Badge>
                  {demoClueDiscovered ? (
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  ) : (
                    <Button size="sm">
                      <Search className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
            {demoClueDiscovered && (
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">¡Pista Descubierta!</span>
                </div>
                <p className="text-xs text-green-700 dark:text-green-300">
                  +15 EXP ganados. Ahora puedes analizar esta pista para obtener más información.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Acción Interactiva - Analizar Pista */}
        {step.content.action === "analyze-clue" && demoClueDiscovered && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <Target className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              Práctica: Analiza la pista descubierta
            </h4>
            <div className="p-4 border border-border/40 rounded-lg bg-background">
              <div className="flex items-center gap-3 mb-3">
                <Camera className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h5 className="font-medium text-sm">Ventana Rota</h5>
                  <p className="text-xs text-muted-foreground">Una ventana del primer piso está rota desde adentro</p>
                </div>
              </div>

              {!demoClueAnalyzed && (
                <div className="space-y-3">
                  {isAnalyzing ? (
                    <div className="space-y-2">
                      <Textarea
                        placeholder="Escribe tu análisis: ¿Qué te dice esta pista? ¿Fue rota desde adentro o afuera? ¿Qué implica esto para el caso?"
                        value={analysis}
                        onChange={(e) => setAnalysis(e.target.value)}
                        className="min-h-[100px] resize-none"
                      />
                      <div className="flex gap-2">
                        <Button size="sm" onClick={handleAnalyze} disabled={!analysis.trim()}>
                          Confirmar Análisis
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => setIsAnalyzing(false)}>
                          Cancelar
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" onClick={() => setIsAnalyzing(true)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Analizar Pista (+20 EXP)
                    </Button>
                  )}
                </div>
              )}

              {demoClueAnalyzed && (
                <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-800 dark:text-blue-200">¡Análisis Completado!</span>
                  </div>
                  <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">Tu análisis: "{analysis}"</p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    +20 EXP ganados. Este análisis podría desbloquear nuevas pistas relacionadas.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Acción Interactiva - Tomar Notas */}
        {step.content.action === "take-notes" && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm flex items-center gap-2">
              <StickyNote className="h-4 w-4 text-orange-600 dark:text-orange-400" />
              Práctica: Usa el sistema de notas
            </h4>

            {step.content.noteExamples && (
              <div className="p-3 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
                <h5 className="text-sm font-medium text-orange-800 dark:text-orange-200 mb-2">
                  Ejemplos de notas útiles:
                </h5>
                <div className="space-y-1">
                  {step.content.noteExamples.map((example: string, index: number) => (
                    <div key={index} className="text-xs text-orange-700 dark:text-orange-300">
                      • {example}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="p-4 border border-border/40 rounded-lg bg-background">
              <div className="space-y-3">
                <Textarea
                  placeholder="Escribe tus notas aquí... Por ejemplo: 'El sospechoso principal tiene acceso a las llaves del edificio' o 'Inconsistencia entre el testimonio del testigo A y B sobre la hora del incidente'"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[100px] resize-none"
                />
                <Button size="sm" onClick={handleTakeNotes} disabled={!notes.trim()}>
                  <StickyNote className="h-4 w-4 mr-2" />
                  Guardar Notas
                </Button>
              </div>

              {demoNotesTaken && (
                <div className="mt-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    <span className="text-sm font-medium text-green-800 dark:text-green-200">¡Notas Guardadas!</span>
                  </div>
                  <p className="text-xs text-green-700 dark:text-green-300">
                    Excelente trabajo. Las notas organizadas son clave para resolver casos complejos.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
