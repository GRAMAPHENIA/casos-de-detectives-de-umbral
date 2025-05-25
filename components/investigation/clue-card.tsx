"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Users, FileText, Search, CheckCircle, Edit } from "lucide-react"

interface ClueCardProps {
  clue: {
    id: string
    title: string
    description: string
    isAnalyzed: boolean
    category: string
    experienceReward: number
    analysis: string
  }
  onAnalyze: (clueId: string, analysis: string) => void
}

const categoryIcons = {
  evidence: Camera,
  witness: Users,
  lead: Search,
  document: FileText,
}

const categoryColors = {
  evidence: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  witness: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  lead: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  document: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
}

export function ClueCard({ clue, onAnalyze }: ClueCardProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState(clue.analysis || "")

  const Icon = categoryIcons[clue.category as keyof typeof categoryIcons] || FileText

  const handleAnalyze = () => {
    if (analysis.trim()) {
      onAnalyze(clue.id, analysis)
      setIsAnalyzing(false)
    }
  }

  return (
    <Card className="border-border/40 hover:bg-muted/50 transition-colors">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium text-sm">{clue.title}</h4>
                <p className="text-xs text-muted-foreground">{clue.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge
                variant="secondary"
                className={`text-xs ${categoryColors[clue.category as keyof typeof categoryColors]}`}
              >
                {clue.category}
              </Badge>
              {clue.isAnalyzed && <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />}
            </div>
          </div>

          {clue.isAnalyzed && clue.analysis && (
            <div className="p-3 bg-muted/50 rounded-lg">
              <h5 className="text-xs font-medium text-muted-foreground mb-1">Análisis:</h5>
              <p className="text-sm">{clue.analysis}</p>
            </div>
          )}

          {!clue.isAnalyzed && (
            <div className="space-y-3">
              {isAnalyzing ? (
                <div className="space-y-2">
                  <Textarea
                    placeholder="Escribe tu análisis de esta pista..."
                    value={analysis}
                    onChange={(e) => setAnalysis(e.target.value)}
                    className="min-h-[80px] resize-none"
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
                  Analizar Pista (+{clue.experienceReward} EXP)
                </Button>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
