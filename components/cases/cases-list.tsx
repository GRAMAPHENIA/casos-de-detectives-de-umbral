"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, FileText } from "lucide-react"
import { CaseCard } from "./case-card"

// Datos de ejemplo
const mockCases = [
  {
    id: "CASE-001",
    title: "Robo en Joyería Central",
    status: "active",
    priority: "high",
    assignedTo: "Det. García",
    lastUpdate: "2024-01-15",
    description: "Investigación de robo con fuerza en joyería del centro de la ciudad",
    evidenceCount: 8,
    witnessCount: 3,
  },
  {
    id: "CASE-002",
    title: "Fraude Corporativo TechCorp",
    status: "pending",
    priority: "medium",
    assignedTo: "Det. Martínez",
    lastUpdate: "2024-01-14",
    description: "Investigación de irregularidades financieras en empresa tecnológica",
    evidenceCount: 15,
    witnessCount: 7,
  },
  {
    id: "CASE-003",
    title: "Desaparición María López",
    status: "active",
    priority: "urgent",
    assignedTo: "Det. García",
    lastUpdate: "2024-01-16",
    description: "Persona desaparecida, última vez vista en el parque municipal",
    evidenceCount: 5,
    witnessCount: 12,
  },
  {
    id: "CASE-004",
    title: "Vandalismo Escuela Primaria",
    status: "closed",
    priority: "low",
    assignedTo: "Det. Rodríguez",
    lastUpdate: "2024-01-10",
    description: "Daños a propiedad escolar durante fin de semana",
    evidenceCount: 3,
    witnessCount: 2,
  },
]

export function CasesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredCases = mockCases.filter((case_) => {
    const matchesSearch =
      case_.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_.id.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || case_.status === statusFilter
    const matchesPriority = priorityFilter === "all" || case_.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="space-y-4">
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Casos Recientes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Filtros */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar casos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="active">Activos</SelectItem>
                  <SelectItem value="pending">Pendientes</SelectItem>
                  <SelectItem value="closed">Cerrados</SelectItem>
                </SelectContent>
              </Select>
              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Prioridad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="urgent">Urgente</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="medium">Media</SelectItem>
                  <SelectItem value="low">Baja</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Lista de casos */}
          <div className="space-y-3">
            {filteredCases.map((case_) => (
              <CaseCard key={case_.id} case={case_} />
            ))}
            {filteredCases.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No se encontraron casos que coincidan con los filtros
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
