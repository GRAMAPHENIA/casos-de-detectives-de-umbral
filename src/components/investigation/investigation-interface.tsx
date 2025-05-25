"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Search, Lightbulb, CheckCircle, Lock, Star, Target } from "lucide-react"
import { ClueCard } from "./clue-card"
import { ClueDiscoveryDialog } from "./clue-discovery-dialog"
import { CaseCompletionDialog } from "./case-completion-dialog"

interface InvestigationInterfaceProps {
  caseId: string
}

// Datos del caso (simulados)
const caseData = {
  id: "CASE-001",
  title: "El Robo de la Joyería",
  description:
    "Una joyería ha sido robada durante la noche. El propietario llegó esta mañana y encontró la puerta forzada y varias joyas valiosas desaparecidas.",
  progress: 25,
  cluesFound: 2,
  totalClues: 8,
  difficulty: "Fácil",
  experienceReward: 100,
}

// Sistema de pistas con dependencias
const cluesSystem = [
  {
    id: "clue-1",
    title: "Puerta Forzada",
    description: "La puerta principal muestra signos de haber sido forzada con una palanca.",
    isDiscovered: true,
    isAnalyzed: true,
    category: "evidence",
    experienceReward: 10,
    unlocksClues: ["clue-2", "clue-3"],
    analysis: "Las marcas en la puerta sugieren que se usó una palanca profesional. El perpetrador tenía experiencia.",
  },
  {
    id: "clue-2",
    title: "Huellas en el Suelo",
    description: "Se encontraron huellas de botas con un patrón distintivo cerca de la entrada.",
    isDiscovered: true,
    isAnalyzed: false,
    category: "evidence",
    experienceReward: 15,
    unlocksClues: ["clue-4"],
    analysis: "",
  },
  {
    id: "clue-3",
    title: "Cámara de Seguridad",
    description: "La cámara de seguridad del edificio de enfrente podría haber grabado algo.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "lead",
    experienceReward: 20,
    unlocksClues: ["clue-5", "clue-6"],
    analysis: "",
  },
  {
    id: "clue-4",
    title: "Testigo Ocular",
    description: "Un vecino vio a una persona sospechosa rondando el área anoche.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "witness",
    experienceReward: 25,
    unlocksClues: ["clue-7"],
    analysis: "",
  },
  {
    id: "clue-5",
    title: "Video de Seguridad",
    description: "El video muestra a dos personas acercándose a la joyería a las 2:30 AM.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "evidence",
    experienceReward: 30,
    unlocksClues: ["clue-8"],
    analysis: "",
  },
  {
    id: "clue-6",
    title: "Vehículo Sospechoso",
    description: "Se ve un auto oscuro estacionado cerca durante el tiempo del robo.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "evidence",
    experienceReward: 20,
    unlocksClues: [],
    analysis: "",
  },
  {
    id: "clue-7",
    title: "Descripción del Sospechoso",
    description: "El testigo describe a una persona alta con chaqueta oscura y gorra.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "witness",
    experienceReward: 25,
    unlocksClues: [],
    analysis: "",
  },
  {
    id: "clue-8",
    title: "Placa del Vehículo",
    description: "Se logra identificar parcialmente la placa del vehículo sospechoso.",
    isDiscovered: false,
    isAnalyzed: false,
    category: "evidence",
    experienceReward: 40,
    unlocksClues: [],
    analysis: "",
  },
]

export function InvestigationInterface({ caseId }: InvestigationInterfaceProps) {
  const [clues, setClues] = useState(cluesSystem)
  const [selectedClue, setSelectedClue] = useState<string | null>(null)
  const [showDiscoveryDialog, setShowDiscoveryDialog] = useState(false)
  const [discoveredClue, setDiscoveredClue] = useState<any>(null)
  const [showCompletionDialog, setShowCompletionDialog] = useState(false)
  const [notes, setNotes] = useState("")

  const discoveredClues = clues.filter((clue) => clue.isDiscovered)
  const availableClues = clues.filter((clue) => !clue.isDiscovered && canDiscoverClue(clue))
  const lockedClues = clues.filter((clue) => !clue.isDiscovered && !canDiscoverClue(clue))

  function canDiscoverClue(clue: any) {
    // Una pista se puede descubrir si todas las pistas que la desbloquean han sido analizadas
    const requiredClues = clues.filter((c) => c.unlocksClues.includes(clue.id))
    return requiredClues.length === 0 || requiredClues.every((c) => c.isAnalyzed)
  }

  const handleDiscoverClue = (clue: any) => {
    setClues((prev) => prev.map((c) => (c.id === clue.id ? { ...c, isDiscovered: true } : c)))
    setDiscoveredClue(clue)
    setShowDiscoveryDialog(true)
  }

  const handleAnalyzeClue = (clueId: string, analysis: string) => {
    setClues((prev) => prev.map((c) => (c.id === clueId ? { ...c, isAnalyzed: true, analysis } : c)))
  }

  const progressPercentage = (discoveredClues.length / clues.length) * 100
  const canSolveCase = discoveredClues.length >= 6 && discoveredClues.filter((c) => c.isAnalyzed).length >= 4

  return (
    <div className="p-4 space-y-6">
      {/* Header del caso */}
      <Card className="border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                {caseData.title}
              </CardTitle>
              <p className="text-sm text-muted-foreground mt-1">{caseData.description}</p>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
              {caseData.difficulty}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Progreso de la Investigación</span>
              <span>
                {discoveredClues.length}/{clues.length} pistas encontradas
              </span>
            </div>
            <Progress value={progressPercentage} className="h-3" />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{discoveredClues.length}</div>
                <div className="text-xs text-muted-foreground">Pistas Encontradas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {discoveredClues.filter((c) => c.isAnalyzed).length}
                </div>
                <div className="text-xs text-muted-foreground">Pistas Analizadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                  {discoveredClues.reduce((sum, clue) => sum + clue.experienceReward, 0)}
                </div>
                <div className="text-xs text-muted-foreground">EXP Ganada</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pistas Descubiertas */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                Pistas Descubiertas ({discoveredClues.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {discoveredClues.map((clue) => (
                  <ClueCard key={clue.id} clue={clue} onAnalyze={handleAnalyzeClue} />
                ))}
                {discoveredClues.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">Comienza a investigar para descubrir pistas</p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Pistas Disponibles */}
          {availableClues.length > 0 && (
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Nuevas Pistas Disponibles ({availableClues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {availableClues.map((clue) => (
                    <div
                      key={clue.id}
                      className="p-3 border border-border/40 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                      onClick={() => handleDiscoverClue(clue)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">{clue.title}</h4>
                          <p className="text-xs text-muted-foreground">{clue.description}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            +{clue.experienceReward} EXP
                          </Badge>
                          <Button size="sm">
                            <Search className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Pistas Bloqueadas */}
          {lockedClues.length > 0 && (
            <Card className="border-border/40">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  Pistas Bloqueadas ({lockedClues.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lockedClues.map((clue) => (
                    <div key={clue.id} className="p-3 border border-border/40 rounded-lg opacity-60">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-sm">???</h4>
                          <p className="text-xs text-muted-foreground">Analiza más pistas para desbloquear</p>
                        </div>
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Panel Lateral */}
        <div className="space-y-4">
          {/* Notas del Detective */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                Notas del Detective
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Escribe tus observaciones y teorías aquí..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[120px] resize-none"
              />
            </CardContent>
          </Card>

          {/* Botón de Resolver Caso */}
          <Card className="border-border/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                Resolver Caso
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {canSolveCase
                    ? "¡Tienes suficientes pistas para resolver el caso!"
                    : `Necesitas al menos 6 pistas encontradas y 4 analizadas para resolver el caso.`}
                </p>
                <Button className="w-full" disabled={!canSolveCase} onClick={() => setShowCompletionDialog(true)}>
                  {canSolveCase ? "Resolver Caso" : "Continúa Investigando"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Diálogos */}
      <ClueDiscoveryDialog open={showDiscoveryDialog} onOpenChange={setShowDiscoveryDialog} clue={discoveredClue} />

      <CaseCompletionDialog
        open={showCompletionDialog}
        onOpenChange={setShowCompletionDialog}
        caseData={caseData}
        clues={discoveredClues}
      />
    </div>
  )
}
