import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Plus, MapPin, User } from "lucide-react"

const mockTimelineEvents = [
  {
    id: "T-001",
    date: "2024-01-10",
    time: "22:45",
    type: "incident",
    title: "Robo reportado",
    description: "Llamada al 911 reportando robo en progreso en Joyería Central",
    location: "Calle Principal 123",
    officer: "Patrulla 15",
  },
  {
    id: "T-002",
    date: "2024-01-10",
    time: "23:15",
    type: "arrival",
    title: "Llegada de primera unidad",
    description: "Patrulla 15 llega al lugar. Perpetradores ya habían huido",
    location: "Calle Principal 123",
    officer: "Of. Rodríguez",
  },
  {
    id: "T-003",
    date: "2024-01-11",
    time: "08:30",
    type: "investigation",
    title: "Inicio de investigación",
    description: "Det. García asignado al caso. Inicio de recolección de evidencias",
    location: "Joyería Central",
    officer: "Det. García",
  },
  {
    id: "T-004",
    date: "2024-01-11",
    time: "14:20",
    title: "Entrevista con propietario",
    type: "interview",
    description: "Entrevista formal con Carlos Mendoza, propietario del establecimiento",
    location: "Estación de Policía",
    officer: "Det. García",
  },
  {
    id: "T-005",
    date: "2024-01-12",
    time: "10:15",
    type: "evidence",
    title: "Análisis de video de seguridad",
    description: "Revisión de grabaciones de cámaras de seguridad del área",
    location: "Laboratorio Forense",
    officer: "Téc. Martínez",
  },
]

const typeColors = {
  incident: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  arrival: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  investigation: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  interview: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  evidence: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
}

const typeLabels = {
  incident: "Incidente",
  arrival: "Llegada",
  investigation: "Investigación",
  interview: "Entrevista",
  evidence: "Evidencia",
}

export function Timeline() {
  return (
    <Card className="border-border/40">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Línea de Tiempo
          </CardTitle>
          <Button variant="outline" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Agregar Evento
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border"></div>

          <div className="space-y-6">
            {mockTimelineEvents.map((event, index) => (
              <div key={event.id} className="relative flex items-start gap-4">
                {/* Punto en la línea */}
                <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-border">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>

                {/* Contenido del evento */}
                <div className="flex-1 min-w-0 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-sm font-medium">{event.title}</h4>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${typeColors[event.type as keyof typeof typeColors]}`}
                    >
                      {typeLabels[event.type as keyof typeof typeLabels]}
                    </Badge>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{event.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>
                        {event.date} - {event.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{event.officer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
