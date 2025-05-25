"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Trophy, Star, Target, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

interface CaseCompletionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  caseData: any
  clues: any[]
}

export function CaseCompletionDialog({ open, onOpenChange, caseData, clues }: CaseCompletionDialogProps) {
  const [solution, setSolution] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const router = useRouter()

  const handleSubmitSolution = async () => {
    setIsSubmitting(true)

    // Simular evaluación de la solución
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setShowResults(true)
  }

  const handleFinishCase = () => {
    // Redirigir al dashboard con el caso resuelto
    router.push("/")
  }

  const totalExperience = clues.reduce((sum, clue) => sum + clue.experienceReward, 0) + caseData.experienceReward

  if (showResults) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-center">
              <Trophy className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              ¡Caso Resuelto!
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 text-center">
            <div className="mx-auto w-20 h-20 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center">
              <Trophy className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold">¡Excelente trabajo, Detective!</h3>
              <p className="text-sm text-muted-foreground">Has resuelto exitosamente "{caseData.title}"</p>
            </div>

            {/* Estadísticas del caso */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{clues.length}</div>
                <div className="text-xs text-muted-foreground">Pistas Encontradas</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {clues.filter((c) => c.isAnalyzed).length}
                </div>
                <div className="text-xs text-muted-foreground">Pistas Analizadas</div>
              </div>
            </div>

            {/* Recompensas */}
            <div className="p-4 bg-muted/50 rounded-lg space-y-3">
              <h4 className="font-medium">Recompensas Obtenidas:</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Experiencia Total:</span>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  >
                    +{totalExperience} EXP
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Nivel Alcanzado:</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Nivel 2
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Logro Desbloqueado:</span>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  >
                    Primer Caso
                  </Badge>
                </div>
              </div>
            </div>

            <Button onClick={handleFinishCase} className="w-full">
              <CheckCircle className="h-4 w-4 mr-2" />
              Finalizar Caso
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            Resolver el Caso
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">Resumen del Caso:</h4>
            <p className="text-sm text-muted-foreground">{caseData.description}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="solution">Tu Solución:</Label>
            <Textarea
              id="solution"
              placeholder="Basándote en las pistas encontradas, explica quién cometió el crimen, cómo lo hizo y por qué..."
              value={solution}
              onChange={(e) => setSolution(e.target.value)}
              className="min-h-[120px] resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Usa las pistas que has analizado para construir tu teoría del caso.
            </p>
          </div>

          <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium">Pistas Disponibles:</span>
            </div>
            <div className="space-y-1">
              {clues
                .filter((c) => c.isAnalyzed)
                .map((clue) => (
                  <div key={clue.id} className="text-xs text-muted-foreground">
                    • {clue.title}: {clue.analysis}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Continuar Investigando
            </Button>
            <Button onClick={handleSubmitSolution} disabled={!solution.trim() || isSubmitting} className="flex-1">
              {isSubmitting ? "Evaluando..." : "Resolver Caso"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
