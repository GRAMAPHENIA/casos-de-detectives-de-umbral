"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { FileText, MapPin, Edit } from "lucide-react"
import { EvidenceList } from "./evidence-list"
import { PeopleInvolved } from "./people-involved"
import { Timeline } from "./timeline"

interface CaseDetailsProps {
  caseId: string
}

// Datos de ejemplo para el caso
const mockCaseData = {
  id: "CASE-001",
  title: "Robo en Joyería Central",
  status: "active",
  priority: "high",
  assignedTo: "Det. García",
  createdDate: "2024-01-10",
  lastUpdate: "2024-01-15",
  location: "Calle Principal 123, Centro",
  description:
    "Robo con fuerza en joyería durante horario nocturno. Los perpetradores forzaron la entrada principal y sustrajeron mercancía por valor estimado de $50,000.",
  notes:
    "Revisar cámaras de seguridad del área. Contactar con joyerías cercanas para verificar si han tenido incidentes similares.",
}

export function CaseDetails({ caseId }: CaseDetailsProps) {
  return (
    <div className="p-4 space-y-6">
      {/* Información General */}
      <Card className="border-border/40">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Información General
            </CardTitle>
            <Button variant="outline" size="sm">
              <Edit className="h-4 w-4 mr-2" />
              Editar
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Título</label>
              <p className="text-sm">{mockCaseData.title}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Estado</label>
              <Badge variant="secondary" className="w-fit">
                Activo
              </Badge>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Prioridad</label>
              <Badge variant="destructive" className="w-fit">
                Alta
              </Badge>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Asignado a</label>
              <p className="text-sm">{mockCaseData.assignedTo}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Fecha de creación</label>
              <p className="text-sm">{mockCaseData.createdDate}</p>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Última actualización</label>
              <p className="text-sm">{mockCaseData.lastUpdate}</p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Ubicación
            </label>
            <p className="text-sm">{mockCaseData.location}</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Descripción</label>
            <p className="text-sm leading-relaxed">{mockCaseData.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Grid de componentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personas Involucradas */}
        <PeopleInvolved />

        {/* Evidencias */}
        <EvidenceList />
      </div>

      {/* Línea de Tiempo */}
      <Timeline />

      {/* Notas Privadas */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Edit className="h-5 w-5" />
            Notas Privadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Agregar notas privadas sobre el caso..."
            defaultValue={mockCaseData.notes}
            className="min-h-[100px] resize-none"
          />
          <div className="flex justify-end mt-4">
            <Button size="sm">Guardar Notas</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
