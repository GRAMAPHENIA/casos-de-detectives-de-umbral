import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, FileText, Video, Plus, Download } from "lucide-react"

const mockEvidence = [
  {
    id: "EV-001",
    name: "Cámara de seguridad - Entrada principal",
    type: "video",
    date: "2024-01-10",
    size: "2.3 MB",
    description: "Video de la cámara de seguridad mostrando el momento del robo",
  },
  {
    id: "EV-002",
    name: "Fotografías de la escena",
    type: "image",
    date: "2024-01-10",
    size: "5.7 MB",
    description: "Conjunto de fotografías tomadas en la escena del crimen",
  },
  {
    id: "EV-003",
    name: "Informe forense inicial",
    type: "document",
    date: "2024-01-11",
    size: "1.2 MB",
    description: "Análisis preliminar de huellas dactilares encontradas",
  },
  {
    id: "EV-004",
    name: "Declaración testigo #1",
    type: "document",
    date: "2024-01-12",
    size: "0.8 MB",
    description: "Testimonio del vigilante de seguridad del edificio contiguo",
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "video":
      return Video
    case "image":
      return Camera
    case "document":
      return FileText
    default:
      return FileText
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "video":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
    case "image":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
    case "document":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
  }
}

export function EvidenceList() {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Evidencias ({mockEvidence.length})
          </CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockEvidence.map((evidence) => {
            const Icon = getIcon(evidence.type)
            return (
              <div
                key={evidence.id}
                className="flex items-start gap-3 p-3 rounded-lg border border-border/40 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-medium truncate">{evidence.name}</h4>
                    <Badge variant="secondary" className={`text-xs ${getTypeColor(evidence.type)}`}>
                      {evidence.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 line-clamp-2">{evidence.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{evidence.date}</span>
                    <span>{evidence.size}</span>
                    <span>{evidence.id}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
