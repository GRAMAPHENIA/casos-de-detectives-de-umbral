"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Clock, AlertTriangle } from "lucide-react"
import { useRouter } from "next/navigation"

interface CreateCaseDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const caseTemplates = [
  {
    id: "robbery",
    title: "El Robo de la Joyería",
    description: "Una joyería ha sido robada durante la noche. Investiga las pistas para encontrar al culpable.",
    difficulty: "Fácil",
    estimatedTime: "30-45 min",
    icon: "💎",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: "missing",
    title: "La Desaparición Misteriosa",
    description: "Una persona ha desaparecido sin dejar rastro. Sigue las pistas para descubrir qué pasó.",
    difficulty: "Medio",
    estimatedTime: "45-60 min",
    icon: "🔍",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    id: "murder",
    title: "El Misterio del Ático",
    description: "Un crimen ha ocurrido en una mansión. Usa tu ingenio para resolver este complejo caso.",
    difficulty: "Difícil",
    estimatedTime: "60-90 min",
    icon: "🏚️",
    color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  },
]

export function CreateCaseDialog({ open, onOpenChange }: CreateCaseDialogProps) {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [customTitle, setCustomTitle] = useState("")
  const [customDescription, setCustomDescription] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const router = useRouter()

  const handleCreateCase = async () => {
    setIsCreating(true)

    // Simular creación del caso
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Generar ID único para el caso
    const caseId = `CASE-${Date.now()}`

    // Redirigir a la página de investigación
    router.push(`/investigation/${caseId}`)

    setIsCreating(false)
    onOpenChange(false)
  }

  const selectedTemplateData = caseTemplates.find((t) => t.id === selectedTemplate)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
            Nueva Investigación
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Plantillas predefinidas */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Casos Predefinidos</Label>
            <div className="grid gap-3">
              {caseTemplates.map((template) => (
                <Card
                  key={template.id}
                  className={`border-border/40 cursor-pointer transition-all hover:shadow-md ${
                    selectedTemplate === template.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">{template.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-medium">{template.title}</h3>
                          <Badge variant="secondary" className={`text-xs ${template.color}`}>
                            {template.difficulty}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{template.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{template.estimatedTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            <span>Nivel {template.difficulty}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Caso personalizado */}
          <div className="space-y-3">
            <Label className="text-base font-medium">O Crea Tu Propio Caso</Label>
            <div className="space-y-3">
              <div>
                <Label htmlFor="title">Título del Caso</Label>
                <Input
                  id="title"
                  placeholder="Ej: El Misterio de la Biblioteca"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe el caso que quieres investigar..."
                  value={customDescription}
                  onChange={(e) => setCustomDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </div>

          {/* Vista previa del caso seleccionado */}
          {selectedTemplateData && (
            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Vista Previa:</h4>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong>Título:</strong> {selectedTemplateData.title}
                </p>
                <p className="text-sm">
                  <strong>Descripción:</strong> {selectedTemplateData.description}
                </p>
                <p className="text-sm">
                  <strong>Dificultad:</strong> {selectedTemplateData.difficulty}
                </p>
              </div>
            </div>
          )}

          {/* Botones de acción */}
          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancelar
            </Button>
            <Button
              onClick={handleCreateCase}
              disabled={!selectedTemplate && (!customTitle || !customDescription)}
              className="flex-1"
            >
              {isCreating ? "Creando..." : "Comenzar Investigación"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
