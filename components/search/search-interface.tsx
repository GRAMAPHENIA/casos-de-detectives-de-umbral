"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, X } from "lucide-react"
import { CaseCard } from "@/components/cases/case-card"

const mockSearchResults = [
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
]

export function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [searchType, setSearchType] = useState("all")
  const [dateRange, setDateRange] = useState("all")
  const [location, setLocation] = useState("")

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter])
    }
  }

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter))
  }

  return (
    <div className="p-4 space-y-6">
      {/* Barra de búsqueda principal */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Búsqueda Avanzada
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar casos, personas, evidencias, ubicaciones..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-base"
            />
          </div>

          {/* Filtros avanzados */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de búsqueda" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todo</SelectItem>
                <SelectItem value="cases">Casos</SelectItem>
                <SelectItem value="people">Personas</SelectItem>
                <SelectItem value="evidence">Evidencias</SelectItem>
                <SelectItem value="locations">Ubicaciones</SelectItem>
              </SelectContent>
            </Select>

            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <SelectValue placeholder="Rango de fechas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las fechas</SelectItem>
                <SelectItem value="today">Hoy</SelectItem>
                <SelectItem value="week">Esta semana</SelectItem>
                <SelectItem value="month">Este mes</SelectItem>
                <SelectItem value="year">Este año</SelectItem>
              </SelectContent>
            </Select>

            <Input placeholder="Ubicación..." value={location} onChange={(e) => setLocation(e.target.value)} />

            <Button className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>

          {/* Filtros rápidos */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Filtros rápidos:</label>
            <div className="flex flex-wrap gap-2">
              {["Casos activos", "Alta prioridad", "Asignados a mí", "Actualizados hoy", "Con evidencias"].map(
                (filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    onClick={() => addFilter(filter)}
                    className="text-xs"
                  >
                    <Filter className="h-3 w-3 mr-1" />
                    {filter}
                  </Button>
                ),
              )}
            </div>
          </div>

          {/* Filtros activos */}
          {activeFilters.length > 0 && (
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Filtros activos:</label>
              <div className="flex flex-wrap gap-2">
                {activeFilters.map((filter) => (
                  <Badge key={filter} variant="secondary" className="text-xs">
                    {filter}
                    <Button variant="ghost" size="sm" className="h-auto p-0 ml-2" onClick={() => removeFilter(filter)}>
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Resultados de búsqueda */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>Resultados de Búsqueda</CardTitle>
          <p className="text-sm text-muted-foreground">{mockSearchResults.length} resultados encontrados</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockSearchResults.map((case_) => (
              <CaseCard key={case_.id} case={case_} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Búsquedas sugeridas */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle>Búsquedas Sugeridas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium text-sm">Casos sin resolver</div>
                <div className="text-xs text-muted-foreground">Estado: Activo, Sin progreso reciente</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium text-sm">Evidencias pendientes</div>
                <div className="text-xs text-muted-foreground">Sin análisis forense</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium text-sm">Casos por ubicación</div>
                <div className="text-xs text-muted-foreground">Centro de la ciudad</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
